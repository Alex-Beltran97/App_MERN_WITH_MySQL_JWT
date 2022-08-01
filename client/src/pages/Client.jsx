import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import NewClientModal from "../components/clientView/NewClientModal";
import { useClient } from "../context/ClientContext";

const Client = () => {
  const { clients,getClientsData,deleteClientData } = useClient();

  const deleteClient = async (id)=>{
    try{
      const result = await deleteClientData(id);
      getClientsData();
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getClientsData();
  }, []);

  return (<>
    <h1>Clients</h1>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth:"40rem",margin:'3rem auto' }}>
        <TableHead style={{backgroundColor:'lightgray'}}>
          <TableRow>
            <TableCell style={{fontWeight:700}} align='center'>#</TableCell>
            <TableCell style={{fontWeight:700}} align='center'>Name</TableCell>
            <TableCell style={{fontWeight:700}} align='center'>email</TableCell>
            <TableCell style={{fontWeight:700}} align='center'>password</TableCell>
            <TableCell style={{fontWeight:700}} align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(item=>(
            <TableRow key={item.id}>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.nombre}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.password}</TableCell>
              <TableCell align="center">
                <Stack direction='row' gap={1}>
                  <NewClientModal id={item.id}/>
                  <Button variant='contained' color='secondary' onClick={()=>deleteClient(item.id)}>Delete</Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <NewClientModal />
  </>);
};
 
export default Client;