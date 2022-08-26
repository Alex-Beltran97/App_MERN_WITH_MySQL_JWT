import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import { ClientsProvider } from "./context/ClientsContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Client from "./Pages/Client";

const App = () => {
  return (<>
    <ClientsProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="client" element={<Client />} />
        </Route>
      </Routes>    
    </ClientsProvider>
  </>)
};

export default App;
