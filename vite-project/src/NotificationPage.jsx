
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import axios from 'axios';
import Sidebar from './sidebar';
import Notification from './components-notification/notification';
import './NotificationPage.css'

const NotificationPage = () => {

  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/logs')
      .then(response => {
        const data = response.data || {};
        setUnreadNotifications(data.unread || []);
      })
      .catch(err => console.error('Failed to fetch logs', err));
  }, []);

  return (
    <div>
      <Sidebar />
      <Notification/>
    </div>
  );
};

export default NotificationPage;

