import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 8000;
const app = express();
const server = new createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST"],
        credentials: true,
    }
})


app.get("/",(req,res)=>{
    res.send("Server Start");
})

io.on("connection",(socket)=>{
    console.log(`Socket Connected\nId: ${socket.id}` );
    socket.emit("Welcome",`Welcome to the server: ${socket.id}`);
    socket.on("message",(data)=>{
        io.emit("receive-message",data);
    })
})

server.listen(port,()=>{
    console.log(`server is running on: http://localhost:${port}`);
})