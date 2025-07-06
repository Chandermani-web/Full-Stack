import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("Database Connected Successfully ...");
    }catch(err){
        console.log(`Error occured: ${err}`);
    }
}

export { connectDB };