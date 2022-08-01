import { Paper, Typography } from "@mui/material";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import NewClientForm from "./NewClientForm";

const style = {
  position:'absolute',
  top:"24%",
  left:"32%",
  padding:'1rem',
  minWidth:'40rem'
};

const NewClient = ({id}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  return (<>
    <Button variant="contained" onClick={handleOpen}>{!id?"New client":"Edit"}</Button>
    <Modal
      open={open}
    >
      <Paper style={style}>
        <Typography variant="h5" fontWeight={700} textAlign='center'>{!id?"Create client":"Edit client"}</Typography>
        <NewClientForm id={id} close={handleClose}/>
      </Paper>
    </Modal>
  </>);
};
 
export default NewClient;