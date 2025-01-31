
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";

const Profile = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationDetails: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/profile", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Sidebar/>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Organization Name:</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Organization Details:</label>
          <textarea
            name="organizationDetails"
            value={formData.organizationDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
