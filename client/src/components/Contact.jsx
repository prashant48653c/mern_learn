import React, { useContext, useState } from 'react';
import { UserContext } from '../App';



function Contact() {
  const {user,setuser,setusermes,userMes} = useContext(UserContext);
  console.log(user)

  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
    phone: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const { name,email,phone,feedback,location }=formData;
      const res =await fetch("",{
       method:'POST',
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
         name,email,feedback,phone,location
       })
      })
      const data=await res.json()
      console.log(data)
      setusermes(data)
   
    }catch(err){
      console.log(err)
    }
   

  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
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
            value={user.phone}
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
            value={user.email}
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
