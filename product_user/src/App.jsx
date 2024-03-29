import { useState } from 'react'
import './App.css'
import Header from './Componate/Header/Header'
import Homepage from './Componate/Homepage/Homepage'
import Footer from './Componate/Footer/Footer'
import About from './Componate/About/About'
import { Route, Routes } from 'react-router'
import Contect from './Componate/Contect/Contect'
import Shop from './Componate/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
       <Route path="/" element={<Homepage/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contect" element={<Contect/>}></Route>
       <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
