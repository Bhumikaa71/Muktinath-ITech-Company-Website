import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import Map from "../Map";
import Footer from '../Footer'

function OutletLayout() {
  return (
    <>
    <NavBar />
   
    <Outlet />
    <Footer />
    
    </>
  )
}

export default OutletLayout