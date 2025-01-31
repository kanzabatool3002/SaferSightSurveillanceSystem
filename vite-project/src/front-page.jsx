import React from 'react';
import './front-page.css'; 
import { Link } from 'react-router-dom'; 

function FrontPage() {
  return (
    <div className="front-page">
      <header className="front-page-header">
        <h1>SAFER SIGHT</h1>
        <p>THE BLEND OF SECURITY AND ARTIFICIAL INTELLIGENCE(AI)</p>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="buttons">
        <Link to="/admin" className="btn">Admin</Link>
        <Link to="/login" className="btn">User</Link>
      </div>
      </header>
    </div>
  );
}

export default FrontPage;


