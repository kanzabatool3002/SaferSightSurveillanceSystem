
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import CompWatching from './components-Watch/comp-Watching';
import './Watching.css';
import CameraDetails from './components-Camera/CameraDetails';


function Watching() {
  const [cameras, setCameras] = useState([]);
  const fetchCameras = async () => {
    try {
      const token = localStorage.getItem('userJwt'); // Or sessionStorage.getItem('userJwt')
      console.log("token",token)
      const response = await fetch('http://localhost:5000/api/cameras', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCameras(data);
      } else {
        console.error('Failed to fetch Camera');
      }
    } catch (error) {
      console.error('Error fetching cameras:', error);
    }
  };

  useEffect(() => {
    fetchCameras();
  }, []);
  return (
    <div className="my-watching">
      <Sidebar />
      <div className="main-content">
        <CompWatching />
        <CameraDetails cameras={cameras} />
      </div>
    </div>
  );
}

export default Watching;
