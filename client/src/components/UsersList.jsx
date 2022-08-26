import { CircularProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useClients } from "../context/ClientsContext";
import CreateOrUpdateUser from "./CreateOrUpdateUser";

const UsersList = () => {
  const { 
    clients,
    getClients,
    loadingClients,
    deleteUser
  } = useClients();

  useEffect(() => {
    getClients();
  }, []);


  return (<>
    {!loadingClients?
      <TableContainer component={Paper} style={{maxWidth:"40rem",margin:"1rem auto"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="subtitle1" fontWeight={700}>ID</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" fontWeight={700}>Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" fontWeight={700}>Options</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              clients.map(item=>(
                <TableRow key={ item.id }>
                  <TableCell align="center">{ item.id }</TableCell>
                  <TableCell align="center">{ item.nombre }</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <CreateOrUpdateUser state="update" id={item.id} />
                      <Button variant="contained" color="secondary" onClick={ ()=>deleteUser(item.id) }>Delete</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    :
      <CircularProgress />
    }
  </>)
};

export default UsersList;
