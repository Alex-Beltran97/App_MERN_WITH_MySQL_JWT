import { Alert, Button, Stack } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
// import * as Yup from 'yup';
import { useClient } from '../../context/ClientContext';

const NewClientForm = ({id,close}) => {
  const [initialValues, setInitialValues] = useState({
    nombre:'',
    email:'',
    password:''
  });
  const [isSended, setIsSended] = useState(false);

  const { createClientData,getClientsData,getClientByIdData,editClientData } = useClient();

  const asignIntitalValue = async (id)=>{
    if(id)
      try{
        const result = await getClientByIdData(id);
        setInitialValues(result.data);
      }catch(error){
        console.log(error);
      };
  };

  useEffect(() => {
    asignIntitalValue(id);
  }, []);

  return (<>
    <Formik
      initialValues={initialValues}

      // validationSchema={Yup.object().shape({
      //   nombre:Yup.string().required("Field is required"),
      //   email:Yup.email().required("Field is required"),
      //   password:Yup.string().required("Field is required")
      // })}

      enableReinitialize={true}

      onSubmit={(values,{resetForm})=>{
        if(id){
          editClientData(id,values);
        }else{
          createClientData(values);
        }
        setIsSended(true);
        resetForm();
        setInitialValues({
          nombre:'',
          email:'',
          password:''
        });
        setTimeout(()=>{
          setIsSended(false);
          close();
          getClientsData();
        },1500);
      }}
    >
      {()=>(
        <Form>
          <Stack gap={1}>
            <Field 
              name='nombre' 
              style={{margin:'1rem 0', padding:'0.5rem'}} 
              placeholder='Set your name here'
            />
            <Field 
              name='email' 
              style={{margin:'1rem 0', padding:'0.5rem'}} 
              placeholder='Set your name here'
            />
            <Field 
              name='password' 
              style={{margin:'1rem 0', padding:'0.5rem'}} 
              placeholder='Set your name here'
            />
            <ErrorMessage name='nombre' render={msg=><Alert severity="error">{msg}</Alert>}/>
            {isSended?
              <Alert severity="success">Client is created successfully!</Alert>
              :
              <Stack direction='row' justifyContent='center' gap={1}>
                <Button variant='contained' type='submit'>Submit</Button>
                <Button variant='contained' onClick={()=>close()} color='secondary'>Cancel</Button>
              </Stack>
            }
          </Stack>
        </Form>
      )}
    </Formik>
  </>);
};
 
export default NewClientForm;