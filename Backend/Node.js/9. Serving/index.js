import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,"OK",{"content-type":"text/html"});
        fs.readFile("./public/Chutr-Putr.Dom-manipulation/index.html", (error,data) => {
            if(error) throw error;
            res.end(data)
        });
    }
    else if (req.url === "/root"){
        res.writeHead(200,"OK",{"content-type":"text/html"});
        fs.readFile("./public/root.html",(error,data)=>{
            if(error) throw error;
            res.end(data);
        })
    }
    else{
        res.writeHead(404,"Bad");
        res.end("<h1>404 ,Page not found</h1>")
    }
});

server.listen(4000,()=>console.log("Server is running on http://localhost:4000"));