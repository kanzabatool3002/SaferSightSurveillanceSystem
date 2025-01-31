
import React, { useState } from 'react';
import CameraList from './CameraList';
import CameraView from './CameraView';
import './comp-Watching.css';
import { useNavigate } from 'react-router-dom';

function WatchingHeader() {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/add-device'); // Redirect to the Add Device page
  };

  return (
    <div className="comp-watching">
      <div className="header">
        <h1>Add New Camera</h1>
      </div>
    </div>
  );
}

export default WatchingHeader;
