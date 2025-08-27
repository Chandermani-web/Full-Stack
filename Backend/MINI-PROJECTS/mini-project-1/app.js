import express from "express";
import 'dotenv/config'
import connectDB from "./db/database.js";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import path from "path";
import router from "./Routes/routes.js";
import { isLoggedIN } from "./Middlewares/middlewares.js";
import { profile } from "console";

const app = express();
const port = process.env.PORT;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


app.set("view engine", "ejs");
app.set("views", path.join(_dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Routes
app.use('/',router);

app.get("/",isLoggedIN,profile);

app.listen(port,()=>{
    console.log(`\nServer is running on http://localhost:${port}`);
    connectDB();
})