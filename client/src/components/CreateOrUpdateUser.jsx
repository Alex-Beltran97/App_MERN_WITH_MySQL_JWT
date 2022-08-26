import { Alert, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useClients } from "../context/ClientsContext";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nombre:Yup.string().required()
});

const CreateOrUpdateUser = ({ state,id }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () =>setOpen(e=>!e);

  const { createClient } = useClients();

  const saveClient = async (data) =>{
    createClient(data,id);
    setSuccess(true);
    setTimeout(()=>{
      setSuccess(false);
    },3000);
  };

  return (<>
    <Button variant="contained" onClick={handleOpen}>
      {state==="create"?"Create new client":"Update"}
    </Button>
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={style}>
        <Typography variant="h4" textAlign='center'>
          {state==="create"?"Create new client":"Update client"}
        </Typography>
        <Formik
          initialValues={{
            nombre:""
          }}

          validationSchema={validationSchema}

          onSubmit={(values,{resetForm})=>{
            saveClient(values);
            resetForm();
          }}
        >
          {()=>(
            <Form>
              <Stack spacing={2}>
                <label htmlFor="nombre">Client name:</label>
                <Field type="text" name="nombre" style={{padding:"0.5rem"}}/>
                <Button type="submit" variant="contained">Save</Button>
                <ErrorMessage name="nombre" render={msg=><Alert severity="error">{ msg }</Alert>}/>
                { success&&<Alert severity="success">Process was successfully!</Alert> }
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  </>)
};

const style = {
  position:"absolute",
  top:"24%",
  left:"32%",
  width:"40rem",
  padding:"1rem"
};

export default CreateOrUpdateUser;
