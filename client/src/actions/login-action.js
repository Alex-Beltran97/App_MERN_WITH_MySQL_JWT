import fetchData from '../Service/fetchData';

const path = '/login';

export const loginUser = async (data)=>
  await fetchData().post(path,data);