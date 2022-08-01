import fetchData from '../Service/fetchData';

const path = '/client';

export const getClients = async ()=>
  await fetchData().get(path);

export const getClientById = async (id)=>
  await fetchData().get(path+`/${id}`);

export const createClient = async (data)=>
  await fetchData().post(path,data);

export const editClient = async (id,data)=>
  await fetchData().put(path+`/${id}`,data);

export const deleteClient = async (id)=>
  await fetchData().delete(path+`/${id}`);