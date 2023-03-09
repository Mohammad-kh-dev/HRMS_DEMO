import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField,Button, Stack } from '@mui/material';
import  { loginPending, loginSuccess, loginFail } from './authSlice'
import { redirect, useNavigate } from 'react-router';
import { userLogin } from '../../api/userapi';



const LoginForm = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const dispatch = useDispatch();
  const isuser = localStorage.getItem("accessJWT")
  const navigate = useNavigate();

  useEffect(()=>{
    if(isuser !== null){
      navigate("/")
    } else redirect("/login")
  })
  const handleSubmit =  async (event) => {
    event.preventDefault();
    dispatch(loginPending());
    const responce = await userLogin({username,password});
    if(responce.data !== null){
      dispatch(loginSuccess(responce))
      //console.log(user)
      navigate("/")
    } else {
      dispatch(loginFail());
    }
    
    
  };

  return (
    <form  onSubmit={handleSubmit}>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={2} mt='150px' >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
       
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        
        
      >
        Login
      </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
