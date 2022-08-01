import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ClientContextProvider } from "./context/ClientContext";
import { LoginContextProvider } from "./context/loginContext";
import Client from "./pages/Client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (<>
    <NavBar />
    <LoginContextProvider>
      <ClientContextProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/clients" element={<Client />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Container>
      </ClientContextProvider>
    </LoginContextProvider>
  </>);
};
 
export default App;