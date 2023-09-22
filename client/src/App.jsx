import { useState } from 'react'

import Navbar from './components/Navbar'
import  {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route  element={ <Home/> } />

      <Route  element={ <About/> } />

      <Route  element={ <Contact/> } />
      <Route  element={ <Login/> } />

      <Route  element={ <Signup/> } />


      </Routes>
    </Router>
  <Navbar/>
  
    </>
  )
}

export default App
