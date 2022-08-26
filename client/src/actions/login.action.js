import axios from "axios";

const path = "/login";

const instance = ()=>axios.create({
  baseURL:"http://localhost:3004/api"
});

export const loginAction = async (data)=>
  await instance().post(path,data);
