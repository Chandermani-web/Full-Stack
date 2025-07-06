import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Required to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files like CSS, JS, images from "public" folder (optional, good for static assets)
app.use(express.static(path.join(__dirname, 'public')));

// ===================
// ROUTES USING path & res methods
// ===================


// Get method


// 1. Send simple text using res.send()
app.get('/text', (req, res) => {
    console.log("/Text");
  res.send('Hello from Express using res.send()');
});

// 2. Send an HTML file using res.sendFile()
app.get('/', (req, res) => {
    console.log("Home")
  res.sendFile(path.join(__dirname, 'public/Chutr-Putr.Dom-manipulation', 'index.html'));
});

app.get('/about', (req, res) => {
    console.log("/About")
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    console.log("/Contact")
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.get("/@/",(req,res)=>{
    res.sendFile(__dirname,"public","contact.html");
})

// 3. Send JSON using res.json()
app.get('/json', (req, res, next) => {
    console.log("/json")
//   res.json({
//     name: 'Himanshu',
//     status: 'Learning Express.js',
//   });
  next();
},(req, res) => {
    console.log("/images-json")
    res.sendFile(path.join(__dirname, "public", "index.json"));
}
);


// 4. Send status + custom message
app.get('/unauthorized', (req, res) => {
  res.status(401).send('You are not authorized!');
});




// Post mehtod
// Ugly code

app.post("/signup",(req,res)=>{
  res.send("This is a signup page.");
})





// Refactor
app.route("/student")
.get((req,res)=> res.send("All Student"))
.post((req,res)=> res.send("Add New Student"))
.put((req,res)=> res.send("Update Student"))
.delete((req,res)=> res.send("Delete Student"))


// 1. Create routes folder and put your routes in a separate file
// 2. Create instance of express.Router()
// 3. instead of app.method change to the "route.method"
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middlewares & provide your routes.



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

