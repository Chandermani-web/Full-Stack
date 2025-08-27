import mongoose from 'mongoose';
import 'dotenv/config'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\nDatabase Connected Successfully on: \n\n\thost: ${conn.connection.host} \n\tport: ${conn.connection.port}\n\tCollection-Name: ${conn.connection.name}`);
    }catch(err){
        console.log(`Error Occured: ${err}`);
    }
}

export default connectDB;