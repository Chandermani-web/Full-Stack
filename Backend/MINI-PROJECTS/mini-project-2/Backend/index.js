import express from "express";
import "dotenv/config";
import connectDB from "./Database/database.js";
import router from "./Routes/route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend (Vite default port)
    credentials: true, // allow cookies, headers
  })
);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}`);
  connectDB();
});
