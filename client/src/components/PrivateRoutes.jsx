import { useEffect } from 'react';
import { Outlet,Navigate, useNavigate } from 'react-router-dom';
import { isExpiredToken } from '../helpers/getSessionInfo';
import Header from './Header';

const PrivateRoutes = () => {
  const navigate = useNavigate();

  const validateSession = ()=>{
    if(!sessionStorage.getItem("user")){
      sessionStorage.clear();
      navigate("/login");
      return 
    };

    if(isExpiredToken()&&sessionStorage.getItem("user")){
      sessionExpired();
      return
    }  

  };

  const sessionExpired = ()=>{
    sessionStorage.clear();
    alert("Your session are expired!");
    navigate("/login");
  }

  useEffect(() => {
    validateSession();
  }, [sessionStorage.getItem("user"),isExpiredToken()]);

  return (<>
    <Header />
    <Outlet />
  </>)
};

export default PrivateRoutes;
