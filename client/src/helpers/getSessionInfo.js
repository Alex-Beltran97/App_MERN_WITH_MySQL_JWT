import { isExpired } from 'react-jwt';

export const getToken = ()=>{
  if(sessionStorage.getItem("user")){
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    if(token) return token;
  }
};

export const isExpiredToken = ()=>{
  if(sessionStorage.getItem("user")){
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    if(isExpired(token)) return true;
  }
}