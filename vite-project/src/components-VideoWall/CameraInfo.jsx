import React, { useState, useEffect } from 'react';
import './CameraInfo.css';

const CameraInfo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCamera, setSelectedCamera] = useState('Camera 1');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  return (
    <div className="camera-info">
      <select value={selectedCamera} onChange={handleCameraChange}>
        <option value="Camera 1">Camera 1</option>
        <option value="Camera 2">Camera 2</option>
      </select>
      <span>Date: {currentTime.toLocaleDateString()}</span>
      <span>Time: {formattedTime}</span>
    </div>
  );
};

export default CameraInfo;
