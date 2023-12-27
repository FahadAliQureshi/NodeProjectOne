const express=require("express");
const app=express();
app.use(express.json());
const {Port}=require("./config/config");


app.get("/",(req,res)=>{
    return res.status(200).send({msg:"Welcome to Project one"})
})
app.listen(Port,console.log(`Server is Running on Port `+Port))