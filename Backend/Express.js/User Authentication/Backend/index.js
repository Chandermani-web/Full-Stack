import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./Models/db.js";
import { UserModel } from "./Models/User.js";
import { router } from "./Routes/AuthRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
UserModel();


app.use(bodyParser.json());
app.use(cors());
app.use("/auth",router);

app.get("/",(req,res)=>{
    res.send("Server Start")
});

app.listen(PORT, ()=>{
    console.log(`Server run on http://localhost:${PORT}`);
})