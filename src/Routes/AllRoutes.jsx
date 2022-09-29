import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Description from './Description'
import Homepage from './Homepage'
import Login from './Login'
import Payment from './Payment'
import Shipping from './Shipping'
import SignUp from "./SignUp"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/description" element={<Description/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/shipping" element={<Shipping/>} />
    </Routes>
  )
}

export default AllRoutes