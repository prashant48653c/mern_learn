import { createContext, useContext, useState } from 'react'

import Navbar from './components/Navbar'
import  {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
 


export const UserContext = createContext()
 
function App() {
  const [user, setuser] = useState([])
  const [userMes, setusermes] = useState([])


  return (
    <>
 <UserContext.Provider value={{user,setusermes,userMes ,setuser}}>
 <Navbar/>
    
      <Routes>
        
        <Route exact path='/' element={ <Home/> } />

<Route path='/about' element={ <About/> } />

<Route path='/contact' element={ <Contact/> } />
<Route path='/login' element={ <Login/> } />

<Route path='/signup' element={ <Signup/> } />

       
     
    

      </Routes>
 </UserContext.Provider>
 
    
  
    </>
  )
}

export default App
