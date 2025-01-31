


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice.js';
import { logout } from '../slices/authSlice.js';
import './UserSidebar.css';  // Import the CSS file for styling
import watching from "../Watching.jsx"
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logOutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Compass User</h2>
      </div>
      <ul className="sidebar-menu">
        {userInfo ? (
          <>
            <li>
              <span className="sidebar-item">{userInfo.name}</span>
            </li>
            <li>
              <a href="/profile" className="sidebar-item">Profile</a>
            </li>
            <li>
              <a href="/watching" className="sidebar-item">watching</a>
            </li>
            <li>
              <button onClick={logOutHandler} className="sidebar-item logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login" className="sidebar-item">Sign In</a>
            </li>
            <li>
              <a href="/register" className="sidebar-item">Sign Up</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
