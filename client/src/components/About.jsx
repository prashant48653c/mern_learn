import React, { useEffect } from 'react';
import logo from "../assets/a.png"
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate=useNavigate()

  const callAbout=async ()=>{
    try{
      const res=await fetch("http://localhost:3000/about",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          
        },
        credentials:"include"
      });
      const data=await res.json();
      console.log(data)
      if(res.status != 200){
        navigate("/login")
      }

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    callAbout()
  })
  return (
    <div className="about-me-card">
      <div className="profile-header">
        <img src={" https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"} alt="Profile" width={"250px"} className="profile-photo" />
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
