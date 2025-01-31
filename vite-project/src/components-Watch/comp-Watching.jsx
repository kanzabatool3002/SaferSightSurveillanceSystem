

import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import axios from 'axios';
import CameraList from './CameraList';
import CameraView from './CameraView';
import './comp-Watching.css';
import { useNavigate } from 'react-router-dom';

function CompWatching() {
  const navigate = useNavigate();
  const handleNotificationClick = () => {
    navigate('/notification'); // Redirect to the Add Device page
  };
  const handleAddCameraClick = () => {
    navigate('/add-device'); // Redirect to the Add Device page
  };

  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    const parsedUserInfo = JSON.parse(userInfo);
    const token = parsedUserInfo.userId;  // Extract userId
    console.log("User ID:", token);  // Output the userId
    axios
      .get('http://localhost:5000/logs', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const data = response.data || {};
        setUnreadNotifications(data.unread || []);
      })
      .catch(err => console.error('Failed to fetch logs', err));
  }, []);
  return (
    <div className="comp-watching">
      <div className="header">
        <h1>Watching</h1>
        <div className="icons">

          <div className="notification-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleNotificationClick}
              className="icon icon-bell"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.002 2.002 0 0018 14V7a2.002 2.002 0 00-1.595-1.995L15 4V2h-6v2l-1.405 1.405A2.002 2.002 0 005 7v7a2.002 2.002 0 00-.595 1.595L3 17h5m2 0v2a2 2 0 004 0v-2m-6 0h6"
              />
            </svg>
            <span className="badge">{unreadNotifications.length}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon icon-device"
            onClick={handleAddCameraClick} // Handle click event
            style={{ cursor: 'pointer' }} // Optional: change cursor to pointer on hover
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zm1 14h8v-2H8v2zm0-4h8v-2H8v2z"
            />
          </svg>
        </div>
      </div>

     
      <br />
    </div>
  );
}

export default CompWatching;
