import { pool } from '../db.js';
import { compare } from '../helpers/handleBcrypt.js';
import jwt from "jsonwebtoken";

export const postClientRequest = async (req,res)=>{
  const { email, password } = req.body;
  try{
    const [emailData] = await pool.query("SELECT * FROM users WHERE email LIKE ?",[email]);

    if(emailData.length===0){
      throw new Error("User not found");
    };

    const [user] = emailData;

    const setPass = await compare(password,user.password);

    if(!setPass){
      throw new Error("Password is not valid");
    };
    
    jwt.sign(user,process.env.SECRET_KEY,{expiresIn:"1d"},(err,token)=>{
      if(err){
        throw new Error("Error for create token");
      }

      res.json({...user,token});
    });

  }catch(error){
    res.status(404).json({msg:error.message});
  };
};