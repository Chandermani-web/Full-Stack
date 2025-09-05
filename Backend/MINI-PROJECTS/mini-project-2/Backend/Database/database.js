import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\n-----MongoDB Connected Successfully:------\nHost:${conn.connection.host}\nPort:${conn.connection.port}\n`);
    }
    catch(err){
        console.log(`Error occured: ${err}`);
    }
}

export default connectDB;