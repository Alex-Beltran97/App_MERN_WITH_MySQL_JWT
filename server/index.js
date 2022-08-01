import express from 'express';
import cors from "cors";
import {join,dirname} from 'path';
import {fileURLToPath} from "url";

import { PORT } from "./config.js";
import clientRoutes from './routes/client.routes.js'
import loginRoutes from './routes/login.routes.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());

app.use(clientRoutes);
app.use(loginRoutes);
// app.use(express.static(join(__dirname,"../client")));

app.listen(PORT,()=>{
  console.log("connected in http://localhost:"+PORT);
});
