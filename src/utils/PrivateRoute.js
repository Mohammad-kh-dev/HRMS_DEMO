import { Outlet,Navigate } from "react-router";
import { useSelector } from "react-redux";
import React from 'react'

export const PrivateRoute = () => {
const auth = useSelector(state => state.isAuth);
const userLocalStorage = localStorage.getItem("accessJWT")
  return (
    (auth || userLocalStorage !== null) ? <Outlet/> : <Navigate to="/login"/>
  )
}
