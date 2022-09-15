import { useState } from "react";
import { Button, Container, InputLabel, Modal, Paper, Stack, Table, TableContainer, TableRow, Typography, TableHead, TableCell, TableBody } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { Box } from "@mui/system";

const Sale = () => {
  const [open, setOpen] = useState(false);
  const [concepts, setConcepts] = useState([]);

  const handleOpen = ()=>setOpen(e=>!e);

  return (<>
    <Container style={{ marginTop:"2rem" }}>
      <Button variant="contained" onClick={handleOpen}>New sale</Button>
      <Modal
        open={open}
        onClose={handleOpen}
      >
        <Paper style={stylePaper(concepts.length)}>
          <Typography variant="h5" textAlign="center">
            New sale
          </Typography>
          <Formik
            initialValues={{
              client:0,
              product:0,
              quantity:0
            }}

            enableReinitialize

            onSubmit={(values)=>{
              const { client,...dataToSend} = values
              setConcepts([...concepts,dataToSend]);
            }}
          >
            {()=>(
              <Form>
                <InputLabel htmlFor="client">Client:</InputLabel>
                <Field type="number" name="client" />
                <InputLabel htmlFor="product">Product:</InputLabel>
                <Field type="number" name="product" />
                <InputLabel htmlFor="quantity">Quantity:</InputLabel>
                <Field type="number" name="quantity" />
                <InputLabel htmlFor="concepts">concepts:</InputLabel>
                <Button 
                  variant="outlined"
                  name="concepts"
                  style={{width:"4rem"}}
                  type="submit"
                >
                  +
                </Button>
                { concepts.length!==0&&<TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Import</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {concepts.map(({ product, quantity },index)=>(
                      <TableRow key={ index }>
                        <TableCell>{ product }</TableCell>
                        <TableCell>{ quantity }</TableCell>
                      </TableRow>
                    ))}                    
                    </TableBody>
                  </Table>
                </TableContainer> }
                <Stack direction="row" justifyContent="center" spacing={1} style={{margin:"0.5rem"}}>
                  <Button variant="contained">Submit</Button>
                  <Button variant="contained" onClick={()=>{
                    setConcepts([]);
                    handleOpen();
                  }}>Cancel</Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </Container>
  </>)
};

const stylePaper = (array) => ({
  padding:"1rem",
  position:"absolute",
  top:"12%",
  left:"30%",
  width:"40rem",
  height:"32rem",
  overflowY:array>3?"scroll":"visible"
});

export default Sale;
