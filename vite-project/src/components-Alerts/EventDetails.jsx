import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className="event-details">
      <h2>Event Details:</h2>
      <div className="video-row">
        <h3>Video</h3>
        <label className="auto-play">
          <input type="checkbox" checked /> Auto-Play
        </label>
      </div>
      <div className="placeholder-row">
        <div className="video-placeholder">
          <span>No Video</span>
        </div>
        <div className="picture-placeholder">
          <span>No Picture</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
