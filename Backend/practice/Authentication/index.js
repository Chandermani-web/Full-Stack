import express from 'express';
import 'dotenv/config'
import router from './Routes/Auth.route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './Database/Database.js';
import { UserModel } from './Models/Auth.model.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',router);

UserModel();

app.get("/",(req,res)=>{
    res.send("Authentication");
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${process.env.PORT}`);
    connectDB();
})