import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Home = () => {
  const { user, setuser, setusermes, userMes } = useContext(UserContext);



  const navigate = useNavigate()
  const [name, setName] = useState([])






  const callAbout = async () => {
    try {
      const res = await fetch("http://localhost:3000/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data, "getdata")
      setuser(data)
      if (res.status != 200) {
        console.log("User not logged in")
        setName('')
      }

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    callAbout()

  }, [user])
  console.log(name)

  return (
    <>


      <section className="hero-section">
        <div className="head-text">
          {
            user.name ? (
              <>
                <p>Welcome {user.name}</p>
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