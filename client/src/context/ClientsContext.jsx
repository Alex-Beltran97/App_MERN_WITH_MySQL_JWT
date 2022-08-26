import { createContext, useContext, useEffect, useState } from "react";
import { deleteClient, getAllClients, postClient, putClient } from "../actions/client.action";

const ClientsContext = createContext();

export const useClients = ()=>{
  const context = useContext(ClientsContext);
  if (context) return context;
}

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(false);

  const getClients = async ()=>{
    try{
      setLoadingClients(true);
      const data = await getAllClients();
      setClients([...data.data]);
      setLoadingClients(false);
    }catch(error){
      console.log(error);
    };
  };

  const createClient = async (info,id)=>{
    setLoadingClients(true);
    try{
      if(id){
        const data = await putClient(id,info);
        getClients();
        setLoadingClients(false);
        return data;
      };
      const data = await postClient(info);
      
      getClients();
      setLoadingClients(false);
      return data;
    }catch(error){
      console.log(error);
    };
  };

  const deleteUser = async (id) =>{
    try{
      await deleteClient(id);
      getClients();
    }catch(error){
      console.log(error);
    };
  };

  return (<>
    <ClientsContext.Provider value={{
      clients,
      getClients,
      loadingClients,
      createClient,
      deleteUser
    }}>
      { children }
    </ClientsContext.Provider>
  </>)
};