import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Menu from './pages/Menu'
import FinalOrderPage from './pages/FinalOrderPage'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path='/' element={<Menu />}></Route>
      <Route path='/cart' element ={<FinalOrderPage />}></Route>

      
    </Routes>
    </BrowserRouter>
  )
}

export default App