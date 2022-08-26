import { Alert, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { getToken } from '../helpers/getSessionInfo';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(getToken()){
      navigate("/");
    }
  }, []);

  return (<>
    <Container>
      <Paper style={style} elevation={4}>
        <Typography variant="h4" textAlign="center">Login</Typography>
        <LoginForm />
      </Paper>
    </Container>
  </>)
};


const style = {
  margin:"4rem auto",
  width:"32rem",
  padding:"1rem"
};

export default Login;
