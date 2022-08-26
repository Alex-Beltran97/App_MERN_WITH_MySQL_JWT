import { Alert, Box, Button, CircularProgress, Stack } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginAction } from "../actions/login.action";

const validationSchema = Yup.object().shape({
  email:Yup.string().email().required(),
  password:Yup.string().required()
});


const LoginForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (userData) =>{
    try{
      const data = await loginAction(userData);
      sessionStorage.setItem("user",JSON.stringify(data.data));
      setSuccess(true);
      setTimeout(()=>{
        setSuccess(false);
        navigate("/");
      },3000);
    }catch(error){
      const { msg } = (error.response.data);
      setError(msg);
      setTimeout(()=>setError(""),3000);
    };
  }

  return (<>
    <Formik
      initialValues={{
        email:"",
        password:""
      }}

      validationSchema={validationSchema}

      onSubmit={(values,{resetForm})=>{
        login(values);
        resetForm();
      }}
    >
      <Form>
        <Stack direction="column" spacing={2}>
          <label htmlFor="email">Set your email:</label>
          <Field type="email" name="email" style={{padding:"0.5rem"}} />
          <ErrorMessage name="email" render={msg=><Alert severity="error">{ msg }</Alert>}/>
          <label htmlFor="email">Set your password:</label>
          <Field type="password" name="password" style={{padding:"0.5rem"}} />
          <ErrorMessage name="password" render={msg=><Alert severity="error">{ msg }</Alert>}/>
          <Button type="submit" variant="contained">Login</Button>
          { success&&<Stack direction="row" justifyContent="space-between">
            <Alert severity="success" style={{width:"28rem"}}>Process was successfully!</Alert> 
            <CircularProgress />
          </Stack> }
          { error&&<Alert severity="error">{ error }</Alert> }
        </Stack>
      </Form>
    </Formik>
  </>)
};

export default LoginForm;
