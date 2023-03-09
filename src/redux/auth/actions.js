//import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const login = (username, password) => async (dispatch) => {
  try {
    /*const response = await axios.post('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password, })
    });*/
const response = await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: username,
    password: password,
    // expiresInMins: 60, // optional
  })
});
const data=await response.json()

localStorage.setItem('token',JSON.stringify(data.token));
    
const user = jwt_decode(data.token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT',
  });
};
