import { Alert, Button, Container, Stack, Typography } from '@mui/material';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
import { useLogin } from '../context/loginContext';

const Login = () => {
  const { loginHandler } = useLogin();

  const navigate = useNavigate();

  return (<>
    <Typography variant='h4'>Login</Typography>
    <Container>
      <Formik
        initialValues={{
          email:'',
          password:''
        }}

        // validationSchema={Yup.object().shape({
        //   email:Yup.string().required("Email is required!"),
        //   password:Yup.string().required("Password is required!")
        // })}
      
        onSubmit={async (values)=>{
          try{
            const result  = await loginHandler(values);
            if(result.data){
              navigate("/home");
            }else{
              alert('User is not exist!!')
            };
          }catch(error){
            console.log(error);
          }
        }}
      >
        {()=>(
          <Form style={{padding:'0 8rem'}}>
            <Stack gap={1}>
              <Field style={{padding:"0.5rem 8px"}} name='email' type='email' placeholder='Set your email'/>
              <ErrorMessage name="email" render={msg=><Alert severity="error">{msg}</Alert>}/>
              <Field style={{padding:"0.5rem 8px"}} name='password' type='password' placeholder='Set your password'/>
              <ErrorMessage name="password" render={msg=><Alert severity="error">{msg}</Alert>}/>
              <Button variant="contained" type='submit'>Send</Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  </>);
};
 
export default Login;