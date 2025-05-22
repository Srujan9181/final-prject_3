import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Navbar from './Navbar'
import Dashboard from './components/dashboard'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
      
    <BrowserRouter>
   
    <Routes>
      
      
      <Route path='/' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  )
}

export default App