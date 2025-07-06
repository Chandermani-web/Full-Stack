import http from 'http'

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method)
});

server.listen(4000, ()=> console.log("Server Up"));