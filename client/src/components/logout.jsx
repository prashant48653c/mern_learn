import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const logout = () => {
    const navigate=useNavigate()
  const {user,setuser} = useContext(UserContext);
    

    const getLogOut=async ()=>{
        try{
          const res=await fetch("http://localhost:3000/logout",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
              
            },
            credentials:"include"
          });
          const data= await res.json();
          console.log(data)
          if(data){
         setuser("")
            navigate("/")
            window.location.reload()
          }
    
        }catch(err){
          console.log(err)
        }
      }
    
       useEffect(()=>{
        getLogOut()

       })
   

  return (
    <div>logout</div>
  )
}

export default logout