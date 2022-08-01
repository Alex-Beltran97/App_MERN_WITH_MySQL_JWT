import { Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideMenuBar from './SideMenuBar';

const NavBar = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify({isLogin:false}))
  }, []);

  return (<>
    <Paper style={{backgroundColor:"royalBlue",padding:'0.5rem',color:"#fff"}}>
      <Stack direction='row' justifyContent="space-between">
        <SideMenuBar />
        {userData?.isLogin&&
          <Typography variant='h4'>{userData?.nombre}</Typography>
        }
        <Typography variant='h4' paddingX={4}>
          <Link to='/login' style={{color:'#fff',textDecoration:'none'}}>{userData?.isLogin?"Logout":"Login"}</Link>
        </Typography>
      </Stack>
    </Paper>
  </>);
};
 
export default NavBar;