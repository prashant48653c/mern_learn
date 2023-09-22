import { useState } from 'react'

import Navbar from './components/Navbar'
import  {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
 
function App() {

  return (
    <>
  <Navbar/>
    
      <Routes>
        
        <Route exact path='/' element={ <Home/> } />

<Route path='/about' element={ <About/> } />

<Route path='/contact' element={ <Contact/> } />
<Route path='/login' element={ <Login/> } />

<Route path='/signup' element={ <Signup/> } />

       
     
    

      </Routes>
    
  
    </>
  )
}

export default App
