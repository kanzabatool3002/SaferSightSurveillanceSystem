
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

import jwt from 'jsonwebtoken';
import generateUserToken from '../utils/jwtConfig/userJwtConfig/generateUserToken.js';
import transporter from '../config/nodemailer.js';
import destroyUserToken from '../utils/jwtConfig/userJwtConfig/destroyUserToken.js';
import ErrorHandler from '../middlewares/error.js';
import { sendEmail } from '../utils/Email/sendEmail.js';
import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import twilio from "twilio";
import { sendToken } from '../utils/Email/sendToken.js';
import crypto from 'crypto';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_NUMBER);

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Email and password are required.", 400));
  }
  const user = await User.findOne({ email, accountVerified: true }).select(
    "+password"
  );
  const isPasswordMatched = await user.comparePassword(password);
  if (isPasswordMatched) {
    // Update the lastLogin timestamp
    user.lastLogin = new Date();
    await user.save();
    generateUserToken(res, user._id); 
    let registeredUserData = {
      userId: user._id, // Include user ID in the response
      name: user.name,
      organizationName: user.organizationName,
      phone: user.phone,
      organizationlocation: user.organizationlocation,
      userlocation: user.userlocation,
      organizationNumber: user.organizationNumber,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      email: user.email
    }
    if (user.profileImageName) {
      registeredUserData.profileImageName = user.profileImageName;
    }
    res.status(201).json(registeredUserData);
  }
  if (!user || !isPasswordMatched) {
    res.status(401);
    throw new Error('Invalid Email or Password, User authentication failed.');
  }
});

const registerUser = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, organizationName, phone, password, verificationMethod } = req.body;
    if (!name || !email || !phone || !password || !verificationMethod) {
      return next(new ErrorHandler("All fields are required.", 400));
    }
    function validatePhoneNumber(phone) {
      const phoneRegex = /^\+923\d{9}$/;
      return phoneRegex.test(phone);
    }
    if (!validatePhoneNumber(phone)) {
      return next(new ErrorHandler("Invalid phone number.", 400));
    }
    const existingUser = await User.findOne({
      $or: [
        { email, accountVerified: true },
        { phone, accountVerified: true },
      ],
    });
    if (existingUser) {
      return next(new ErrorHandler("Phone or Email is already used.", 400));
    }
    const registrationAttemptsByUser = await User.find({
      $or: [
        { phone, accountVerified: false },
        { email, accountVerified: false },
      ],
    });
    if (registrationAttemptsByUser.length > 3) {
      return next(
        new ErrorHandler(
          "You have exceeded the maximum number of attempts (3). Please try again after an hour.",
          400
        )
      );
    }
    const userData = {
      name,
      email,
      phone,
      organizationName,
      password,
    };
    const user = await User.create(userData);
    const verificationCode = await user.generateVerificationCode();
    await user.save();
    const result = await sendVerificationCode(
      verificationMethod,
      verificationCode,
      name,
      email,
      phone
    );

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message,
      });
    } else {
      return next(new ErrorHandler(result.message, 500));
    }
  } catch (error) {
    next(error);
  }
});


async function sendVerificationCode(
  verificationMethod,
  verificationCode,
  name,
  email,
  phone
) {
  try {
    if (verificationMethod === "email") {
      const message = generateEmailTemplate(verificationCode);
      sendEmail({ email, subject: "Your Verification Code", message });
      return {
        success: true,
        message: `Verification email successfully sent to ${name}`,
      };
    } else if (verificationMethod === "phone") {
      const verificationCodeWithSpace = verificationCode
        .toString()
        .split("")
        .join(" ");
      await client.calls.create({
        twiml: `<Response><Say>Your verification code is ${verificationCodeWithSpace}. Your verification code is ${verificationCodeWithSpace}.</Say></Response>`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
      });
      return {
        success: true,
        message: "OTP sent successfully.",
      };
    } else {
      return {
        success: false,
        message: "Invalid verification method.",
      };
    }
  } catch (error) {
    console.error("Error in sendVerificationCode:", error.message);
    return {
      success: false,
      message: "Failed to send verification code.",
    };
  }
}

function generateEmailTemplate(verificationCode) {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #4CAF50; text-align: center;">Verification Code</h2>
        <p style="font-size: 16px; color: #333;">Dear User,</p>
        <p style="font-size: 16px; color: #333;">Your verification code is:</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #4CAF50; padding: 10px 20px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #e8f5e9;">
            ${verificationCode}
          </span>
        </div>
        <p style="font-size: 16px; color: #333;">Please use this code to verify your email address. The code will expire in 10 minutes.</p>
        <p style="font-size: 16px; color: #333;">If you did not request this, please ignore this email.</p>
        <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #999;">
          <p>Thank you,<br>SAFER SIGHT SURVEILLANCE SYSTEM</p>
          <p style="font-size: 12px; color: #aaa;">This is an automated message. Please do not reply to this email.</p>
        </footer>
      </div>
    `;
}

export const verifyOTP = catchAsyncError(async (req, res, next) => {
  const { email, otp, phone } = req.body;

  function validatePhoneNumber(phone) {
    const phoneRegex = /^\+923\d{9}$/;
    return phoneRegex.test(phone);
  }

  if (!validatePhoneNumber(phone)) {
    return next(new ErrorHandler("Invalid phone number.", 400));
  }

  try {
    const userAllEntries = await User.find({
      $or: [
        {
          email,
          accountVerified: false,
        },
        {
          phone,
          accountVerified: false,
        },
      ],
    }).sort({ createdAt: -1 });

    if (!userAllEntries) {
      return next(new ErrorHandler("User not found.", 404));
    }

    let user;

    if (userAllEntries.length > 1) {
      user = userAllEntries[0];

      await User.deleteMany({
        _id: { $ne: user._id },
        $or: [
          { phone, accountVerified: false },
          { email, accountVerified: false },
        ],
      });
    } else {
      user = userAllEntries[0];
    }

    if (user.verificationCode !== Number(otp)) {
      return next(new ErrorHandler("Invalid OTP.", 400));
    }

    const currentTime = Date.now();

    const verificationCodeExpire = new Date(
      user.verificationCodeExpire
    ).getTime();
    console.log(currentTime);
    console.log(verificationCodeExpire);
    if (currentTime > verificationCodeExpire) {
      return next(new ErrorHandler("OTP Expired.", 400));
    }

    user.accountVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpire = null;
    await user.save({ validateModifiedOnly: true });

    sendToken(user, 200, "Account Verified.", res);
  } catch (error) {
    return next(new ErrorHandler("Internal Server Error.", 500));
  }
});


const logoutUser = asyncHandler(async (req, res) => {


  destroyUserToken(res);

  res.status(200).json({ message: 'User Logged Out' });

});

const getUserProfile = asyncHandler(async (req, res) => {


  const user = {


    name: req.user.name,
    email: req.user.email,
    organizationName: req.user.organizationName,
    phone: req.user.phone,
    organizationlocation: req.user.organizationlocation,
    userlocation: req.user.userlocation,
    organizationNumber: req.user.organizationNumber,
    createdAt: req.user.createdAt,
    lastLogin: req.user.lastLogin,
    profileImageName: req.user.profileImageName
  }

  res.status(200).json({ user });

});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.organizationName = req.body.organizationName || user.organizationName;
    user.phone = req.body.phone || user.phone;
    user.organizationlocation = req.body.organizationlocation || user.organizationlocation;
    user.userlocation = req.body.userlocation || user.userlocation;
    user.organizationNumber = req.body.organizationNumber || user.organizationNumber;
    user.createdAt = req.body.createdAt || user.createdAt;
    user.lastLogin = req.body.lastLogin || user.lastLogin;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password
    }
    if (req.file) {
      user.profileImageName = req.file.filename || user.profileImageName;
    }
    const updatedUserData = await user.save();
    res.status(200).json({
      name: updatedUserData.name,
      organizationName: updatedUserData.organizationName,
      phone: updatedUserData.phone,
      organizationlocation: updatedUserData.organizationlocation,
      userlocation: updatedUserData.userlocation,
      organizationNumber: updatedUserData.organizationNumber,
      createdAt: updatedUserData.createdAt,
      lastLogin: updatedUserData.lastLogin,
      email: updatedUserData.email,
      profileImageName: updatedUserData.profileImageName
    });
  } else {
    res.status(404);
    throw new Error("Requested User not found.");
  };
});
export const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
    accountVerified: true,
  });
  if (!user) {
    return next(new ErrorHandler("User not found.", 404));
  }
  const resetToken = user.generateResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetPasswordUrl = `${process.env.CLIENT_URL}/password/reset/${resetToken}`;

  const message = `Your Reset Password Token is:- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it.`;

  try {
    sendEmail({
      email: user.email,
      subject: "MERN AUTHENTICATION APP RESET PASSWORD",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully.`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new ErrorHandler(
        error.message ? error.message : "Cannot send reset password token.",
        500
      )
    );
  }
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(
      new ErrorHandler(
        "Reset password token is invalid or has been expired.",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("Password & confirm password do not match.", 400)
    );
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendToken(user, 200, "Reset Password Successfully.", res);
});

export {

  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,


};