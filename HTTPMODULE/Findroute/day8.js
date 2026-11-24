//Practice routing using http  module
import http from "http";
const server=http.createServer((req,res)=>{})
     res.writeHead(200,{"content-type":"text/html"});
     if(req.url==="/"){
        res.end("<h1>Welcome to about page</h1>");
     }else if(req.url==="/about"){
         res.end("<h1>Welcome to about page</h1>")
}else{
    res.writeHead(404,("content-type":"text/html"))
}
server.listen(3000,()=>{
console.log("Server is running on http://localhost:")
})