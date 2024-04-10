require('dotenv').config();
const express=require('express')
const app=express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send("hi this is my site")
})
app.get('/home',(req,res)=>{
    res.send("this is home page")
})
app.get('/help',(req,res)=>{
    res.send("this is help page")
})

app.listen(process.env.PORT,()=>{
    console.log("the server has started");
})