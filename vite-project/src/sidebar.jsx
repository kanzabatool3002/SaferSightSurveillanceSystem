

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation
import './sidebar.css';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from './slices/userApiSlice.js';
import { logout } from './slices/authSlice.js';

function Sidebar() {
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [lastLogin, setLastLogin] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current route

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

  // const menuItems = ['Watching', 'Alerts', 'Video-Logs', 'FAQ', 'Location', 'Profile', 'VLM'];
  const menuItems = ['Watching', 'Alerts', 'Video-Logs', 'FAQ', 'Profile', 'VLM'];
  // const menuItems = ['Watching', 'Alerts', 'Video-Logs', 'FAQ', 'Profile'];

  useEffect(() => {
    setName(userInfo.name);
    setOrganizationName(userInfo.organizationName);
    setCreatedAt(userInfo.createdAt);
    setLastLogin(userInfo.lastLogin);
  }, [userInfo]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="SAFER SIGHT" />
      </div>
      <nav>
        {menuItems.map((item, index) => {
          const itemPath = `/${item.toLowerCase()}`;
          const isActive = location.pathname === itemPath; // Check if this is the active route
          return (
            <Link
              key={index}
              to={itemPath}
              className={`block px-4 py-2 rounded-lg ${
                isActive ? 'bg-white text-black font-bold' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-1">
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Profile Information</h3>
          <p className="text-gray-300">Name: {userInfo.name}</p>
          <p className="text-gray-300">Organization: {userInfo.organizationName}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Account Activity</h3>
          <p className="text-gray-300">
            <span className="font-bold">Joined: </span>
            <br />
            {new Date(userInfo.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Last Login: </span>
            <br />
            {new Date(userInfo.lastLogin).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={logOutHandler}
          className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
