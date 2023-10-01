import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Home = () => {
 
 
  
  const navigate=useNavigate()
  const [name,setName]=useState([])
  console.log(name)

  
  


  const callAbout=async ()=>{
    try{
      const res=await fetch("http://localhost:3000/getdata",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          
        },
        credentials:"include"
      });
      const data= await res.json();
      console.log(data ,"getdata")
      setName(data)
      
      if(res.status != 200){
      console.log("User not logged in")
      setName('')
      }

    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    callAbout()
  },[])
  console.log(name)

  return (
    <>


    <section className="hero-section">
        <div className="head-text">
        {
  name.name  ? (
    <>
      <p>Welcome {name.name}</p>
       <p>Nice to see you again</p>
    </>
  ) : (
    <p>We are the MERN developer</p>
  )
}

          
        </div>
    </section>
    
    
    </>
  )
}

export default Home