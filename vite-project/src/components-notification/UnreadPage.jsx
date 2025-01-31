
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from "socket.io-client";
import './UnreadPage.css';
import UnreadHeader from './UnreadHeader';

import { useSelector, useDispatch } from 'react-redux';
const socket = io("http://localhost:5000", {
  withCredentials: true
});


const UnreadPage = () => {
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [error, setError] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    // Retrieve the 'userInfo' string from localStorage
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
        console.log('API response:', response);
        console.log('Logs fetched:', response.data);
        const data = response.data || {};
        setUnreadNotifications(data.unread || []);
      })
      .catch(err => {
        console.error('Failed to fetch unread logs:', err);
        setError('Unable to fetch unread notifications.');
      });

    socket.on('new-log', (log) => {
      console.log('New log received:', log);
      setUnreadNotifications(prev => [log, ...prev]);
    });

    return () => {
      socket.off('new-log');
    };
  }, []);

  const markAllAsRead = () => {
    const userInfo = localStorage.getItem('userInfo');
    const parsedUserInfo = JSON.parse(userInfo);
    const token = parsedUserInfo.userId;  // Extract userId
    console.log(" mark User ID:", token);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    axios.post('http://localhost:5000/mark-all-read', {}, { headers })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="unread-main">
      <UnreadHeader />
      <button onClick={markAllAsRead}>Read All</button>
      <ul>
        {unreadNotifications.length > 0 ? (
          unreadNotifications.map((notification, index) => (
            <li key={index}>
              <strong>{notification.detectionType}</strong> detected at {notification.date} {notification.time}.
            </li>
          ))
        ) : (
          <li>No unread notifications.</li>
        )}
      </ul>
    </div>
  );
};

export default UnreadPage;

















