import express from 'express';
import cors from "cors";
import {join,dirname} from 'path';
import {fileURLToPath} from "url";
import { PORT } from "./config.js";
//Routes
import clientRoutes from './routes/client.routes.js';
import loginRoutes from './routes/login.routes.js';
import registerRoutes from './routes/register.routes.js';
import salesRoutes from './routes/sales.routes.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
  console.log("connected in http://localhost:"+PORT);
});

// app.use(express.static(join(__dirname,"../client")));


//Router
app.use(clientRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(salesRoutes);

