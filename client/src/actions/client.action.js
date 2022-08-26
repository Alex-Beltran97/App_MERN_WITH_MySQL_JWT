import axios from "axios";

const token = ()=>{
  if(sessionStorage.getItem("user")){
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    return token
  }
};

const path = "/client";

const instance = ()=>axios.create({
  baseURL:"http://localhost:3004/api",
  headers:{
    authorization:`Bearer ${token()}`
  }
});

//Client
export const getAllClients = async ()=>
  await instance().get(path);

export const postClient = async (data)=>
  await instance().post(path,data);

export const putClient = async (id,data)=>
  await instance().put(path+"/"+id,data);

export const deleteClient = async (id)=>
  await instance().delete(path+"/"+id);