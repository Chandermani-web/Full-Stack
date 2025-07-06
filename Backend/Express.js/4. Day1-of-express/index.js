// Advanced Router

// 1. Create routes folder and put your routes in a separate file
// 2. Create instance of express.Router()
// 3. instead of app.method change to the "route.method"
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middlewares & provide your routes.

import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs/promises';
import student from "./routes/student.js";    //routes
import teacher from "./routes/teacher.js";   //routes
import route from './routes/route.js';
import images from './public/json.js'         //Json  
import students from "./middlewares/student.js";      //Middleware
import givepage from "./middlewares/page.js";         //Middleware

// For Extract the data from the files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Tell browser or server we are using ejs (template engine)
app.set("view engine", "ejs");
app.use("/", route);                    // Problem 


// Extract the file from the controllers and routes folder
app.use("/students", student);
app.use("/teachers", teacher);


// Give the location of the page that user visits
app.use(givepage);

app.use(express.static(path.join(__dirname,"public")))


// Router params
// Extract params from request method
app.get("/student/delete/:id/:name/:course/:branch", students , (req, res) => {
  const id = req.params.id;
  const { name } = req.params;
  const { course, branch } = req.params;
  res.json({
  message: `Delete successfully`,
  data: {
    studentId: id,
    studentName: name,
    course: course,
    branch: branch
  }
});

});

// Direct method
app.get("/e-com/product/iphone/:model", (req, res) => {
  res.send(`Model of the IPhone: ${req.params.model}`);
});




// Query string
// ? &

// sending json
app.get("/images",(req,res)=>{
    res.json(images);
})


// Serving
// About Page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Nature Page
app.get('/nature', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "nature.html"));
});

// Index Page
app.get("/index", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/Chutr-Putr.Dom-manipulation/index.html"));     // Simple Method to inert the file in the get method
});

app.listen(port, () => console.log(`Server up! on http://localhost:3000`));

