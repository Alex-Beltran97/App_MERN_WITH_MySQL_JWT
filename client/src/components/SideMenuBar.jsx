import { useState } from "react";
import { Button, Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import { IoMenuSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  const navTo = (route)=>{
    navigate("/"+route);
    handleClose();
  };

  return (<>
    <IconButton
      sx={{
        color:'white',
        fontSize:'2rem'
      }}
      onClick={handleOpen}
    >
      <IoMenuSharp />
    </IconButton>
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
    >
      <List style={{padding:'0 1rem'}}>
        <ListItem>
          <Button variant='text' onClick={()=>navTo("home")}>Home</Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button variant='text' onClick={()=>navTo("clients")}>Clients</Button>
        </ListItem>
      </List>
    </Drawer>
  </>);
};
 
export default SideMenuBar;