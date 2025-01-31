import React, { useState } from 'react';
import './CameraView.css'; 

function CameraView() {
  const [selectedCamera, setSelectedCamera] = useState('Camera 1');

  const cameras = [
    { name: 'Camera 1', image: 'CAM1.png' },
    { name: 'Camera 2', image: 'CAM2.png' },
   
  ];

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const selectedCameraData = cameras.find(
    (camera) => camera.name === selectedCamera
  );

  return (
    <div className="camera-view">
      <div className="camera-header">
        <h2>{selectedCamera}</h2>

        <select value={selectedCamera} onChange={handleCameraChange}>
          {cameras.map((camera) => (
            <option key={camera.name} value={camera.name}>
              {camera.name}
            </option>
          ))}
        </select>
      </div>
      <div className="camera-grid">
        {selectedCameraData && (
          <div className="camera-feed">
            <div
              className="camera-image"
              style={{ backgroundImage: `url(${selectedCameraData.image})` }}
            />
            <div className="camera-controls">
              <button title="Screenshot">⏱</button>
              <button title="Timeline">⏱</button>
              <button title="Volume">⏱</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CameraView;
