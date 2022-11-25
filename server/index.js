const { json } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BookMarkModel = require("./models/BookMarkSchema")
const cors = require("cors")



app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://sudhi:123@cluster0.3r6eiqx.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/insert",(req,res)=>{
    console.log(req.body);
})

app.listen(3001,()=>{
    console.log("server is up and running on port 3001..");
})