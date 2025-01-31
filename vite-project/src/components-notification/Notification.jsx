
import React, { useState } from 'react';
import UnreadPage from './UnreadPage.jsx';
import ReadPage from './ReadPage.jsx';
import './notification.css';
import NotificationHeader from './NotificationHeader.jsx';

const Notification = () => {
  const [currentPage, setCurrentPage] = useState('unread'); // Default to 'unread'

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="notification-container">
        <NotificationHeader/>
      {/* <h1>Notifications</h1> */}
      <div className="navigation">
        <button onClick={() => switchPage('unread')} className={currentPage === 'unread' ? 'active' : ''}>
          Unread
        </button>
        <button onClick={() => switchPage('read')} className={currentPage === 'read' ? 'active' : ''}>
          Read
        </button>
      </div>
      <div className="content">
        {currentPage === 'unread' ? <UnreadPage /> : <ReadPage />}
      </div>
    </div>
  );
};

export default Notification;
