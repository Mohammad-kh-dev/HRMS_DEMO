import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'
import SideBar from '../components/SideBar'
import { Fotter } from '../components/fotter'
export const Layout = () => {
  return (
    <>
    <div class="wapper">
    <Header/>
    <SideBar/>
    <Outlet/>
   
    

   
    
    
    <Fotter/>    
    </div>
    </>
  )
}
