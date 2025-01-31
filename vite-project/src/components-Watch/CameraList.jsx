import React from 'react';
import './CameraList.css'; 

function CameraList({ searchTerm, viewMode }) {
  const cameras = [
    { id: 1, name: 'Parking Gate 1' },
    { id: 2, name: 'Parking Gate 2' },
    { id: 3, name: 'Parking Gate 3' },
    { id: 4, name: 'Parking Gate 4',}
  ];

  const filteredCameras = cameras.filter(camera => 
    camera.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`camera-list ${viewMode}`}>
      {filteredCameras.map((camera) => (
        <div key={camera.id} className="camera-item">
          <span>{camera.id}. {camera.name}</span>
          <button>{camera.expanded ? '+' : '+'}</button>
          {camera.expanded}
        </div>
      ))}
    </div>
  );
}

export default CameraList;