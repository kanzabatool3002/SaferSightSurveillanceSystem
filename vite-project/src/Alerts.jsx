import React from 'react';
import './Alerts.css';

import AlertFilters from './components-Alerts/AlertFilters.jsx';
import AlertTable from './components-Alerts/AlertTable.jsx';
import EventDetails from './components-Alerts/EventDetails.jsx';
import Sidebar from './sidebar.jsx';
import Header from './components-Alerts/Header.jsx';

const Alerts = () => {
  return (
    <div className="alerts-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          {/* <AlertFilters /> */}
          <AlertTable />
          {/* <EventDetails /> */}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
