import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/userApiSlice";

import { toast } from "react-toastify";

import Loader from "../components/Loader";

import { PROFILE_IMAGE_DIR_PATH } from "../utils/constants";
import Sidebar from "../sidebar.jsx"
import ProfileHeader from './ProfileHeader.jsx'

import "./ProfileScreen.css";




const ProfileScreen = () => {


  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [phone, setPhone] = useState("");
  const [organizationlocation, setOrganizationlocation] = useState("");
  const [userlocation, setUserlocation] = useState("");
  const [organizationNumber, setOrganizationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation()

  useEffect(() => {
    setName(userInfo.name);
    setUserId(userInfo.userId);
    setEmail(userInfo.email);
    setOrganizationName(userInfo.organizationName);
    setPhone(userInfo.phone);
    setOrganizationlocation(userInfo.organizationlocation);
    setUserlocation(userInfo.userlocation);
    setOrganizationNumber(userInfo.organizationNumber);

  }, [userInfo.name, userInfo.email, userInfo.organizationName, userInfo.phone,userInfo.userId, userInfo.organizationlocation, userInfo.userlocation, userInfo.organizationNumber])

  const submitHandler = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      toast.error('Passwords do not match.');

    } else {

      try {

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('organizationName', organizationName);
        formData.append('phone', phone);
        formData.append('organizationlocation', organizationlocation);
        formData.append('userlocation', userlocation);
        formData.append('organizationNumber', organizationNumber);
        formData.append('password', password);
        formData.append('profileImage', profileImage);

        const responseFromApiCall = await updateProfile(formData).unwrap();

        dispatch(setCredentials({ ...responseFromApiCall }));

        toast.success("Profile updated successfully");

      } catch (err) {

        toast.error(err?.data?.message || err?.error);

      }

    }

  };



  return (
    <div>
      <Sidebar />
      <ProfileHeader />
      <div className="profile-container">
        {/* <FormContainer> */}
        <div className="formContainer">
          {userInfo.profileImageName && (
            <img
              src={PROFILE_IMAGE_DIR_PATH + userInfo.profileImageName}
              alt={userInfo.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                marginTop: "5px",
                marginLeft: "115px",
                marginBottom: "10px",
              }}
            />
          )}

          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2 custom-form-group" controlId="name">
              <Form.Label className="custom-label">Name</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            <Form.Group className="my-2 custom-form-group" controlId="email">
              <Form.Label className="custom-label">Email Address</Form.Label>
              <Form.Control
              className="custom-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2 custom-form-group" controlId="organizationName">
              <Form.Label className="custom-label">Organization Name</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 custom-form-group" controlId="phone">
              <Form.Label className="custom-label">Contact Number</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter your Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 custom-form-group" controlId="organizationNumber">
              <Form.Label className="custom-label">Organization Number</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter Organization Number"
                value={organizationNumber}
                onChange={(e) => setOrganizationNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 custom-form-group" controlId="userlocation">
              <Form.Label className="custom-label">User Location</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter your Location"
                value={userlocation}
                onChange={(e) => setUserlocation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-2 custom-form-group" controlId="organizationlocation">
              <Form.Label className="custom-label">Organization Location</Form.Label>
              <Form.Control
              className="custom-control"
                type="text"
                placeholder="Enter Organization Location"
                value={organizationlocation}
                onChange={(e) => setOrganizationlocation(e.target.value)}
              ></Form.Control>
            </Form.Group>









            <Form.Group className="my-2 custom-form-group" controlId="password">
              <Form.Label className="custom-label">Password</Form.Label>
              <Form.Control
              className="custom-control"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 custom-form-group" controlId="confirmPassword">
              <Form.Label className="custom-label">Confirm Password</Form.Label>
              <Form.Control
              className="custom-control"
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Button type="submit" variant="primary" className="mt-3 submitBtn"> Update Profile </Button>
          </Form>

          {isLoading && <> <Loader /> </>}

        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
