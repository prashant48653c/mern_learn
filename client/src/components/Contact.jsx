import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';



function Contact() {
  const navigate=useNavigate()
  const { user, setuser, setusermes, userMes } = useContext(UserContext);
  // console.log(user)


  const getData=async ()=>{
    try{
      const res=await fetch("http://localhost:3000/getdata",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          
        },
        credentials:"include"
      });
      const data=await res.json();
      console.log(data)
      setuser(data)
      if(res.status != 200){
        navigate("/login")
      }

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const [formData, setFormData] = useState({
    name: user.name,
    feedback: '',
    phone: user.phone,
    email: user.email,
    location: '',
  });
  // console.log(formData)

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { name, email, phone, feedback, location } = formData;

      const res = await fetch("http://localhost:3000/contact", {
        method: 'POST',
        credentials:"include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, feedback, phone, location
        })
      })
      const data = await res.json()
      // console.log(data)
      setusermes(data)
      if (data) {
        window.alert("Succesfully sent")
      }

    } catch (err) {
      console.log(err)
    }


  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phoneNumber"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userGmail">Your Gmail </label>
          <input
            type="email"
            name="email"
            id="userGmail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
