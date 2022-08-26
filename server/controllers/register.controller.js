import { pool } from "../db.js"
import { encrypt } from "../helpers/handleBcrypt.js";

export const postLogin = async (req,res) =>{
  const { name, email, password } = req.body;
  const passwordHash = await encrypt(password);
  try{
    const [ row ] = await pool.query("INSERT INTO users SET ?",{ name, email, password:passwordHash});

    res.json(row);
  }catch(error){
    res.status(404).json({error:error.message});
  };
};