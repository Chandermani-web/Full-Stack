import express from 'express';
import connectDB from './Models/db.js'; 
import dotenv from 'dotenv';
import router from './Routes/Route.js';
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
// connectDB();

app.use(cors());

// Sample route
app.use("/api", router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});