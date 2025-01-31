
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadHeader from './ReadHeader';

import './UnreadPage.css';
const ReadPage = () => {
  const [readNotifications, setReadNotifications] = useState([]);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    const parsedUserInfo = JSON.parse(userInfo);
    const token = parsedUserInfo.userId;  // Extract userId
    console.log("User ID:", token);
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
        setReadNotifications(data.read || []);
      })
      .catch(err => console.error('Failed to fetch read logs', err));
  }, []);

  return (
    <div>
      <ReadHeader />
      <ul>
        {readNotifications.map((notification, index) => (
          <li key={index}>
            <strong>{notification.detectionType}</strong> detected at {notification.date} {notification.time}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadPage;
