import { createContext, useContext, useState } from "react";
import { getClients,createClient, getClientById, editClient, deleteClient } from "../actions/client-action";

export const ClientContext = createContext();

export const useClient = ()=>{
  const context = useContext(ClientContext);
  if(!context)
    throw new Error("Must be a context into provider!");
  
  return context;
};

export const ClientContextProvider = ({children}) => {
  const [clients, setClients] = useState([]);

  const getClientsData = async ()=>{
    try{
      const result = await getClients();
      setClients([...result.data]);
    }catch(error){
      console.log(error);
    };
  };
  
  const getClientByIdData = async (id)=>{
    try{
      const result = await getClientById(id);
      return result;
    }catch(error){
      console.log(error);
    };
  };
  
  const createClientData = async (data)=>{
    try{
      const result = await createClient(data);
    }catch(error){
      console.log(error);
    };
  };
  
  const editClientData = async (id,data)=>{
    try{
      const result = await editClient(id,data);

      return result;
    }catch(error){
      console.log(error);
    };
  };
  
  const deleteClientData = async (id)=>{
    try{
      const result = await deleteClient(id);

      return result;
    }catch(error){
      console.log(error);
    };
  };

  return (<ClientContext.Provider value={{
    clients,
    getClientsData,
    getClientByIdData,
    createClientData,
    editClientData,
    deleteClientData
  }}>
    {children}
  </ClientContext.Provider>);
};