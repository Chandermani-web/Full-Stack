import express from 'express';
import dotenv from 'dotenv';
import path from "path"
import { fileURLToPath } from 'url';
import { connectDB } from './models/db.conn.js';
import { AddTaskModel } from './models/Addtask.db.js';
import cors from "cors"
import bodyParser from 'body-parser';
import { router } from './routes/Auth.route.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
app.use(express.static(path.join(__dirname,"First_unified_mentor_project(To-Do-List)")));

connectDB();
AddTaskModel();

app.use(bodyParser.json());
app.use(cors());
app.use("/",router);

const address = "/" || "/Dashboard.html"

app.get(address,(req,res)=>{
    res.sendFile(path.join(__dirname,"First_unified_mentor_project(To-Do-List)", "Dashboard.html"));
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})