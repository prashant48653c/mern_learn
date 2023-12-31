import React, { useContext,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/a.png"
import { UserContext } from '../App';

const Navbar = () => {
  const {user,setuser} = useContext(UserContext);
   

 console.log(user,"Navbar")

    const navigate=useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={logo} style={{
                            maxWidth:"50px",
                            borderRadius:"50%"
                        }} alt="" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                            

                            
                            
                           

                      {
                        user.name &&
                        <>  <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    </>

                      }
                        
                     {
                        !user.name && 
                        <>
                          <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">SignUp</Link>
                        </li>
                        </> 
                     }
                         
                        
                          
                   
                        
                       
                      
                                
                                
                                
                                
                                
                            


                             
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar