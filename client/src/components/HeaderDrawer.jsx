import { Drawer, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(e=>!e);

  return (<>
    <IconButton onClick={handleOpen}>
      <IoMenu style={{color:"#fff"}}/>
    </IconButton>
    <Drawer
      anchor="left"
      open={open}
      onClose={handleOpen}
    >
      <List>
        <ListItem>
          <ListItemButton href="/">
            <Typography>Home</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/client">
            <Typography>Client</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/sale">
            <Typography>Sale</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  </>)
};

export default HeaderDrawer;
