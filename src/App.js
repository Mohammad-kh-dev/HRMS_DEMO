/* eslint-disable no-unused-vars */
import React from "react";

import { Dashborad } from "./pages/Dashborad";
import { Routes,Route } from "react-router";
import { Layout } from "./pages/Layout";
import LoginForm from "./auth/Forms/LoginForm";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  



  return (
    <>
    <Routes>
   
      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Layout/>}>
        <Route index path="/home" element={<Dashborad/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>      
      

      </Route>
      <Route path="/login" element={<LoginForm/>}/>     
     
    </Routes>
    
    </>

  
  
     
    
  );
}

export default App;
