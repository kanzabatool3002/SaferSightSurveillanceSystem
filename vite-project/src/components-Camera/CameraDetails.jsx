
import React, { useState, useEffect } from 'react';
import './CameraDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CameraDetails = ({ cameras }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCameras, setFilteredCameras] = useState([]);

  // Initialize filteredCameras with all cameras (including "Camera 1")
  useEffect(() => {
    setFilteredCameras([
      {
        cameraName: 'Camera 1',
        cameraLocation: 'juw',
        installationLocation: 'Laptop',
        ipAddress: '000.000.000',
        cameraType: 'Webcam',
        resolution: '32x23',
        frameRate: '340',
      },
      ...cameras,
    ]);
  }, [cameras]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredCameras(
      [
        {
          cameraName: 'Camera 1',
          cameraLocation: 'juw',
          installationLocation: 'Laptop',
          ipAddress: '000.000.000',
          cameraType: 'Webcam',
          resolution: '32x23',
          frameRate: '340',
        },
        ...cameras,
      ].filter((camera) =>
        Object.values(camera)
          .join(' ')
          .toLowerCase()
          .includes(value)
      )
    );
  };

  const sortData = (columnKey, sortOrder) => {
    const sortedData = [...filteredCameras].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[columnKey] > b[columnKey]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredCameras(sortedData);
  };

  return (
    <div>
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search cameras..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>

      <div className="camera-detail-list">
        
        {filteredCameras.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th onClick={() => sortData('index', 'asc')}>Index</th>
                <th>Name</th>
                <th>Location</th>
                <th>Installation Location</th>
                <th>IP Address</th>
                <th>Type</th>
                <th>Resolution</th>
                <th>FPS</th>
              </tr>
            </thead>
            <tbody>
              {filteredCameras.map((camera, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {index === 0 ? (
                      <a href="/live" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {camera.cameraName}
                      </a>
                    ) : (
                      camera.cameraName
                    )}
                  </td>
                  <td>{camera.cameraLocation}</td>
                  <td>{camera.installationLocation}</td>
                  <td>{camera.ipAddress}</td>
                  <td>{camera.cameraType}</td>
                  <td>{camera.resolution}</td>
                  <td>{camera.frameRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No cameras found.</p>
        )}
      </div>
    </div>
  );
};

export default CameraDetails;
