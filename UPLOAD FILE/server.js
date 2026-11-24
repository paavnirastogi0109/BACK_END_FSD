import express from 'express';
import multer from 'multer';
const app=express();
const upload=multer({dest:'uploads/'});
app.post('/upload',upload.single('file'),(req,res)=>{
console.log(req.file);
res.send("File uploaded");
});
app.listen(3000,()=>{
    console.log("server is running on 3000");
    
});