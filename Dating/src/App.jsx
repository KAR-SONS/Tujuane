import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Discover from './Pages/Discover'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import Profile from './Auth/Profile'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/discover' element={<Discover/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default App