// //? ===================================================== User Authentication Middleware =====================================================

// import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';
// import User from '../models/userModel.js';



// const authenticateUser = asyncHandler( async (req, res, next) => {

//     const tokenFromRequest = req.cookies.userJwt;

//     if (tokenFromRequest) {

//         try {

//             // Decode the jwt token using the secret key in the server
//             const decodedTokenData = jwt.verify( tokenFromRequest, process.env.JWT_SECRET_KEY_USER);

//             // If the Token is valid, search the Db with the userId obtained after decoding jwt payload
//             const requestUser = await User.findById(decodedTokenData.userId).select('-password');

//             if (requestUser) {

//                 req.user = requestUser; // Set the request user with the user data fetched from the Db

//                 next(); // Proceed to next process

//             }

//         } catch (error) {

//             res.status(401);

//             throw new Error(`Authentication Failed. Invalid token found`);

//         }

//     } else {

//         res.status(401);

//         throw new Error(`Authentication Failed. No token found`);

//     }

// });


// export default authenticateUser;




















import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// const authenticateUser = asyncHandler(async (req, res, next) => {
//   const tokenFromRequest = req.cookies.userJwt;

//   if (!tokenFromRequest) {
//     return res.status(401).json({ error: 'Authentication failed. No token found.' });
//   }

//   try {
//     // Decode the JWT token
//     const decodedTokenData = jwt.verify(tokenFromRequest, process.env.JWT_SECRET_KEY_USER);

//     // Find the user in the database
//     const requestUser = await User.findById(decodedTokenData.userId).select('-password');
//     if (!requestUser) {
//       return res.status(401).json({ error: 'Authentication failed. User not found.' });
//     }

//     req.user = requestUser; // Attach the user object to the request
//     next(); // Proceed to the next middleware/route handler
//   } catch (error) {
//     console.error('Error authenticating user:', error.message);
//     return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
//   }
// });











// const authenticateUser = asyncHandler(async (req, res, next) => {
//   console.log('AuthenticateUser middleware hit');

//   const tokenFromRequest = req.cookies.userJwt?.replace('Bearer ', '');
//   console.log('Token from request:', tokenFromRequest);

//   if (!tokenFromRequest) {
//     console.error('No token found in request');
//     return res.status(401).json({ error: 'Authentication failed. No token found.' });
//   }

//   try {
//     const decodedTokenData = jwt.verify(tokenFromRequest, process.env.JWT_SECRET_KEY_USER);
//     console.log('Decoded Token Data:', decodedTokenData);

//     const requestUser = await User.findById(decodedTokenData.userId).select('-password');
//     console.log('User found:', requestUser);

//     if (!requestUser) {
//       console.error('User not found in database');
//       return res.status(401).json({ error: 'Authentication failed. User not found.' });
//     }

//     req.user = requestUser;
//     console.log('User authenticated successfully:', req.user);
//     next();
//   } catch (error) {
//     console.error('Error authenticating user:', error.message);
//     if (error.name === 'TokenExpiredError') {
//       return res.status(401).json({ error: 'Authentication failed. Token expired.' });
//     }
//     return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
//   }
// });









// currect before php 

// const authenticateUser = asyncHandler(async (req, res, next) => {
//   console.log('AuthenticateUser middleware hit');
  
//   // Check if cookies are available
//   const tokenFromRequest = req.cookies?.userJwt?.replace('Bearer ', ''); // Safely access cookies
  
//   console.log('Token from request:', tokenFromRequest);

//   if (!tokenFromRequest) {
//     console.error('No token found in request');
//     return res.status(401).json({ error: 'Authentication failed. No token found.' });
//   }

//   try {
//     const decodedTokenData = jwt.verify(tokenFromRequest, process.env.JWT_SECRET_KEY_USER);
//     console.log('Decoded Token Data:', decodedTokenData);

//     const requestUser = await User.findById(decodedTokenData.userId).select('-password');
//     console.log('User found:', requestUser);

//     if (!requestUser) {
//       console.error('User not found in database');
//       return res.status(401).json({ error: 'Authentication failed. User not found.' });
//     }

//     req.user = requestUser; // Attach user to request
//     next(); // Proceed to the next handler
//   } catch (error) {
//     console.error('Error authenticating user:', error.message);
//     if (error.name === 'TokenExpiredError') {
//       return res.status(401).json({ error: 'Authentication failed. Token expired.' });
//     }
//     return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
//   }
// });


// export default authenticateUser;







// import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';
// import User from '../models/userModel.js';
//import { catchAsyncError } from "./catchAsyncError.js";
//import ErrorHandler from "./error.js";




const authenticateUser = asyncHandler( async (req, res, next) => {

    const tokenFromRequest = req.cookies.userJwt;

    if (tokenFromRequest) {
    
        try {
            
            const decodedTokenData = jwt.verify( tokenFromRequest, process.env.JWT_SECRET_KEY_USER);

            const requestUser = await User.findById(decodedTokenData.userId).select('-password');

            if (requestUser) {
            
                req.user = requestUser; 

                next(); 

            }

        } catch (error) {
            
            res.status(401);

            throw new Error(`Authentication Failed. Invalid token found`);

        }

    } else {

        res.status(401);

        throw new Error(`Authentication Failed. No token found`);

    }

});


export default authenticateUser;

/**const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated.", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
    req.user = await User.findById(decoded.id);
  
    next();
  });

  export default isAuthenticated;**/




