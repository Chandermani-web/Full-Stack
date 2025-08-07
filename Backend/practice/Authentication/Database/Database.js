import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection Successfully: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error occured: ${error}`);
    }
}

export default connectDB;