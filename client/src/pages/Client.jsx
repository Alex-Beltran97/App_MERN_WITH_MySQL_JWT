import { Container, Typography } from "@mui/material";
import CreateOrUpdateUser from "../components/CreateOrUpdateUser";
import UsersList from "../components/UsersList";

const Client = () => {
  return (<>
    <Container>
      <Typography variant="h6">Client</Typography>
      <UsersList /> 
      <CreateOrUpdateUser state="create" />
    </Container>
  </>)
};

export default Client;
