import axios from "axios";
const loginUrl = "https://dummyjson.com/auth/login"
export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, frmData);
        
        resolve(res.data);
        
        if (res.status === 200) {
          localStorage.setItem("accessJWT", res.data.token);
          
        }
      } catch (error) {
        reject(error);
      }
    });
  };