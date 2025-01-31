import React, { useState, useEffect } from 'react';
import AddLocation from './components-Location/AddLocation';
import LocationList from './components-Location/LocationList';
import Sidebar from './sidebar';


const Location = () => {
  const [locations, setLocations] = useState([]);

  // Fetch locations
  const fetchLocations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/locations'); // Replace with your API URL
      if (response.ok) {
        const data = await response.json();
        setLocations(data);
      } else {
        console.error('Failed to fetch locations');
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <Sidebar/>
      <AddLocation onLocationAdded={fetchLocations} />
      <hr />
      <LocationList locations={locations} />
    </div>
  );
};

export default Location;
