import { useState } from 'react'  
import './App.css'
import Header from './Componate/Header/Header'
import { Route, Routes } from 'react-router'
import Deshboard from './Componate/Deahboard/Deshboard'
import Login from './Componate/Login/Login'
import SignUP from './Componate/SignUP/SignUP'
import ViewProduct from './Componate/ViewProduct/ViewProduct'
import EditProduct from './Componate/EditProduct/EditProduct'
import Addproduct from './Componate/AddProduct/AddProduct'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
     <Routes>
        <Route path='/desh' element={<Deshboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/SignUP' element={<SignUP/>}></Route>
        <Route path='/view' element={<ViewProduct/>}></Route>
        <Route path='/edit' element={<EditProduct/>}></Route>
        <Route path='/add' element={<Addproduct/>}></Route>
     </Routes>
    </>
  )
}

export default App
