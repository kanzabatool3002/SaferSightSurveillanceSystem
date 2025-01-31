
import React from 'react';
import './LocationList.css';

const LocationList = ({ locations }) => {
  return (
    <div className="location-list">
      <h2>Locations</h2>
      {locations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Location Name</th>
              <th>Number of Cameras</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location._id}>
                <td>{location.locationName}</td>
                <td>{location.numberOfCameras}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No locations found.</p>
      )}
    </div>
  );
};

export default LocationList;
