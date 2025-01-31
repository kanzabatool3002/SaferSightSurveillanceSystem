
import React, { useState } from 'react';
import './AlertFilters.css';

const AlertFilters = () => {
    const [selectedPriorities, setSelectedPriorities] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [showContent, setShowContent] = useState(false);
    // Add a state variable to store the user's chosen alarm type
    const [chosenAlarmType, setChosenAlarmType] = useState('');
    
    const contentData = {
      veapon: 'Content for Veapon Detection',
      unsual: 'Content for Unusual Activity',
      humanoid: 'Content for Humanoid Detection',
    };
  
    const handlePriorityChange = (event) => {
      const { value, checked } = event.target;
      setSelectedPriorities((prevPriorities) => {
        if (checked) {
          return [...prevPriorities, value];
        } else {
          return prevPriorities.filter((priority) => priority !== value);
        }
      });
  
      // If "Enable Alarm Triggered Pop-up" is checked and selection changes
      if (value === 'trigger' && checked) {
        // Show the popup to choose the alarm type
        setShowContent(true);
      } else {
        // Hide the popup if user unchecks "Enable Alarm Triggered Pop-up"
        setShowContent(false);
      }
    };
  
    const handleClear = () => {
      setSelectedPriorities([]);
      setSelectedOption('');
      setShowContent(false);
      setChosenAlarmType(''); // Clear chosen alarm type on clear
    };
  
    const handleButtonClick = () => {
      if (selectedOption) {
        setShowContent(true);
      } else {
        alert('Keep It Up..!!');
      }
    };
  
    const handleChooseAlarmType = (type) => {
      setChosenAlarmType(type); // Set the chosen alarm type
    };
  
    const getContent = () => {
      return contentData[selectedOption] || 'No content available for this selection.';
    };
    
  

  return (
    <div className="alert-filters">
      <label>
        <input
          type="checkbox"
          value="trigger"
          checked={selectedPriorities.includes('trigger')}
          onChange={handlePriorityChange}
        />
        Enable Alarm Triggered Pop-up
      </label>
      <div className="actions">
        <button onClick={handleClear}>Cancel</button>
      </div>
      {showContent && !chosenAlarmType && ( // Only show popup if needed
        <div className="content-popup">
          <h3>Choose Alarm Type:</h3>
          <button onClick={() => handleChooseAlarmType('veapon')}>Veapon Detection</button>
          <button onClick={() => handleChooseAlarmType('unsual')}>Unusual Activity</button>
          <button onClick={() => handleChooseAlarmType('humanoid')}>Humanoid Detection</button>
          {/* Replace "Cancel" button with close icon */}
          <button className="close-button" onClick={() => setShowContent(false)}>&#10006;</button>
        </div>
      )}
      {showContent && chosenAlarmType && ( // Show chosen type if selected
        <div className="content-popup">
          <p>You chose: {chosenAlarmType}</p>
          {getContent()}
          <button onClick={() => setShowContent(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AlertFilters;
