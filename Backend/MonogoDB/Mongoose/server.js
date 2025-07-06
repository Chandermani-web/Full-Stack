import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import { createDOC, insertManydata , alldoc, updatedata, deletedata} from "./models/University.js";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/University';
connectDB(DATABASE_URL);

// Inserting Data in Data base
// createDOC();
// insertManydata();


// Retrieving Data from data base
// alldoc();



// Update data in database from server
// updatedata("68590b27e51f38d3e49191c7");


// Deleting data from database
deletedata();


// Starting the server
app.listen(port,()=>{
    console.log(`Server run on http://localhost:${port}`);
})