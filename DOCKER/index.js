import express from 'express'

const app = express();

app.get("/",(req,res)=>{
    res.send("DOCKER")
})

app.get("/PRODUCT",(req,res)=>{
    res.json([
        {id: 1, rollno: 20123002, name: "Chandermani"},
        {id: 2, rollno: 20523002, name: "Partham"},
        {id: 3, rollno: 20123004, name: "Ankit"},
        {id: 4, rollno: 20123006, name: "Amit"},
        {id: 5, rollno: 20123030, name: "Sarthak"},
    ])
})

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})