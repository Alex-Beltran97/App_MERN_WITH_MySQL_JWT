import { pool } from '../db.js';

export const postClientRequest = async (req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM cliente WHERE email LIKE ? AND password LIKE ?",[
    req.body.email,
    req.body.password
  ])
    res.json(rows[0]);
  }catch(error){
    res.status(400).json({msg:error.message});
  };
};