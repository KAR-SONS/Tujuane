import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Discover from './Pages/Discover'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/discover' element={<Discover/>}/>
        </Routes>
    </Router>
  )
}

export default App