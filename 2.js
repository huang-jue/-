const http = require('http');
const fs =require("fs")

const hostname = '127.0.0.1';
const port = 8989;

const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
    if(req.url == "/"){
        res.setHeader("Content-Type","text/html");
        fs.readFile("./",(err,data)=>{
            res.end(data)
        })
    }else{
        fs.readFile("./"+req.url,function(err,data){
            res.end(data)
        })
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});