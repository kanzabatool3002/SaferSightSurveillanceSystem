
import React, { useState } from 'react';
import './AddLocation.css';

const AddLocation = ({ onLocationAdded }) => {
  const [locationName, setLocationName] = useState('');
  const [numberOfCameras, setNumberOfCameras] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const locationData = { locationName, numberOfCameras: parseInt(numberOfCameras, 10) };

    try {
      const response = await fetch('http://localhost:5000/api/add-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setLocationName('');
        setNumberOfCameras('');
        onLocationAdded(); // Refresh the locations list
      } else {
        alert('Failed to add location');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  return (
    <div className="add-location">
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location Name:</label>
          <input
            type="text"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Cameras:</label>
          <input
            type="number"
            value={numberOfCameras}
            onChange={(e) => setNumberOfCameras(e.target.value)}
            
          />
        </div>
        <button type="submit">Add Location</button>
      </form>
    </div>
  );
};

export default AddLocation;
