import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Description from './Description'
import Homepage from './Homepage'
import Login from './Login'
import Payment from './Payment'
import Shipping from './Shipping'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cart" element={<Description/>} />
        <Route path="/cart" element={<Login/>} />
        <Route path="/cart" element={<Payment/>} />
        <Route path="/cart" element={<Shipping/>} />
    </Routes>
  )
}

export default AllRoutes