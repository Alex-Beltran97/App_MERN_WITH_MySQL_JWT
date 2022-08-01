import { createPool } from 'mysql2';
import 'dotenv/config' 

export const pool = createPool({
  host:'localhost',
  port:3306,
  user:process.env.ROOT_USER,
  password:process.env.ROOT_PASSWORD,
  database:'ventareal'
}).promise();