import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HeaderDrawer from "./HeaderDrawer";

const Header = () => {
  const navigate = useNavigate();
  return (<>
    <AppBar position="static">
      <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
        <HeaderDrawer />
        <Button
          variant='contained'
          color='error'
          onClick={()=>{
            sessionStorage.clear();
            navigate("login");
          }}
        >
          Logout
        </Button>        
      </Toolbar>
    </AppBar>
  </>)
};

export default Header;
