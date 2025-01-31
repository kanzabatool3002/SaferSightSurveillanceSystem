import React from 'react';
import Sidebar from './sidebar';
import './VideoWall.css';
import FAQHeader from './FAQHeader.jsx';
import FAQPage from './FAQPage.jsx';

const FAQ = () => {
     return (
    <div className="video-wall">
      <Sidebar />
      <div className="main-content">
        <FAQHeader />
        <FAQPage/>
        
      </div> 
    </div>
  );
}

export default FAQ;


  
