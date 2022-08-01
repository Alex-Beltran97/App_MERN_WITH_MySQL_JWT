import { createContext, useContext, useState } from "react";
import { loginUser } from "../actions/login-action";

export const LoginContext = createContext();

export const useLogin = ()=>{
  const context = useContext(LoginContext);
  if(!context)
    throw new Error("Must be a context into provider!");
  
  return context;
};

export const LoginContextProvider = ({children}) => {

  const loginHandler = async (data)=>{
    try{
      const result = await loginUser(data);
      localStorage.setItem('user',JSON.stringify({isLogin:true,...result.data}));
      return (result);
    }catch(error){
      console.log(error);
    };
  };

  return (<LoginContext.Provider value={{
    loginHandler
  }}>
    {children}
  </LoginContext.Provider>);
};