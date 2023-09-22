import React from 'react';
import logo from "../assets/a.png"


function About() {
  return (
    <div className="about-me-card">
      <div className="profile-header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg"} alt="Profile" width={"250px"} className="profile-photo" />
        <h2>{"Software Engineer"}</h2>
        <p>Ranking: {"1/10"}</p>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
      <div className="profile-details">
        <p>Name: {"Prashant Acharya"}</p>
        <p>Email: {"email@gmail.com"}</p>
        <p>Phone: {"99988833322"}</p>
        <p>User ID: {"28462964925492374"}</p>
      </div>
    </div>
  );
}

export default About;
