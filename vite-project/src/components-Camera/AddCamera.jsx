
import React, { useState } from 'react';
import './AddCamera.css';

const AddCamera = ({ onCameraAdded }) => {
  const [cameraName, setCameraName] = useState('');
  const [cameraLocation, setCameraLocation] = useState('');
  const [installationLocation, setInstallationLocation] = useState('');
  const [ipAddress, setIPAddress] = useState('');
  const [cameraType, setCameraType] = useState('');
  const [resolution, setResolution] = useState('');
  const [frameRate, setFrameRate] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cameraData = { cameraName, cameraLocation, installationLocation, ipAddress, cameraType, resolution, frameRate };
    try {
      const response = await fetch('http://localhost:5000/api/add-camera', {
        method: 'POST',
        credentials: 'include', // Ensures cookies are sent with the request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cameraData),
      });

      if (response.ok) {
        const result = await response.json();
        // alert(result.message);
        setCameraName('');
        setCameraLocation('');
        setInstallationLocation('');
        setIPAddress('');
        setCameraType('');
        setResolution('');
        setFrameRate('');

        onCameraAdded(); // Refresh the locations list
      } else {
        alert('Failed to add Camera');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding camera');
    }
  };

  return (
    <div className="add-camera">
      {/* <h2>Add Camera</h2> */}
      <form onSubmit={handleSubmit}>
        <label>
          Camera Name:
          <input type="text" name="cameraName" value={cameraName} onChange={(e) => setCameraName(e.target.value)} required />
        </label>
        <label>
          Camera Location:
          <input type="text" name="cameraLocation" value={cameraLocation} onChange={(e) => setCameraLocation(e.target.value)} required />
        </label>
        <label>
          Installation Location:
          <input type="text" name="installationLocation" value={installationLocation} onChange={(e) => setInstallationLocation(e.target.value)} required />
        </label>
        <label>
          IP Address:
          <input type="text" name="ipAddress" value={ipAddress} onChange={(e) => setIPAddress(e.target.value)} required />
        </label>
        <label>
          Camera Type:
          <input type="text" name="cameraType" value={cameraType} onChange={(e) => setCameraType(e.target.value)} required />
        </label>
        <label>
          Resolution:
          <input type="text" name="resolution" value={resolution} onChange={(e) => setResolution(e.target.value)} required />
        </label>
        <label>
          Frame Rate (FPS):
          <input type="number" name="frameRate" value={frameRate} onChange={(e) => setFrameRate(e.target.value)} required />
        </label>
        <button type="submit">Add Camera</button>
      </form>
    </div>
  );
};

export default AddCamera;
