

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/adminAuthSlice";
import { useUpdateAdminMutation } from "../../slices/adminApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import ProfileHeader from "../../components/AdminComponents/Headers/ProfileHeader";
import "./ProfileScreen.css";

const AdminProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { adminInfo } = useSelector((state) => state.adminAuth);
  const [updateProfile, { isLoading }] = useUpdateAdminMutation();

  useEffect(() => {
    setName(adminInfo.name);
    setEmail(adminInfo.email);
  }, [adminInfo.name, adminInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
    } else {
      try {
        const responseFromApiCall = await updateProfile({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...responseFromApiCall }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <div className="admin-profile-main">
      <ProfileHeader />
      <div className="form-container">
        <AdminHeader />
        <div className="admin-profile-header">
          
          <form onSubmit={submitHandler} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default AdminProfileScreen;
