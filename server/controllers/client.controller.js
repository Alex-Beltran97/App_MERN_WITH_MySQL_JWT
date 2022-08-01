import { pool } from '../db.js';

export const getClientsRequest = async (req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM cliente ORDER BY id DESC");
    res.json(rows);
  }catch(error){
    return res.status(500).json({message:error.message});
  };
};

export const getClientRequest = async (req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM cliente WHERE id = ?",[req.params.id]);
    res.json(rows[0]);
  }catch(error){
    return res.status(500).json({message:error.message});
  };
};

export const postClientRequest = async (req,res)=>{
  try{
    const [result] = await pool.query("INSERT INTO cliente SET ?",[req.body]);
    res.json(req.body);
  }catch(error){
    return res.status(500).json({message:error.message});
  };
};  

export const putClientsRequest = async (req,res)=>{
  try{
    const [rows] = await pool.query("UPDATE cliente SET ? WHERE id = ?",[req.body,req.params.id]);
    res.json(rows);
  }catch(error){
    return res.status(500).json({message:error.message});
  };
};  

export const deleteClientsRequest = async (req,res)=>{
  try{
    const [rows] = await pool.query("DELETE FROM cliente WHERE id = ?",[req.params.id]);
    res.json(rows);
  }catch(error){
    return res.status(500).json({message:error.message});
  };
};  