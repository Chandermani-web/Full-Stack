import http from 'http'

// Create a server
http.createServer((req,res)=>{
    console.log(req);
    res.write("Hello Everyone this is 23th April 2025");
}).listen(8000,()=>console.log("Server up\nRun on http://locallost:8000"))