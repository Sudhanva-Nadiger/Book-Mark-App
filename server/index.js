const { json } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BookMarks = require("./models/BookMarkSchema")
const cors = require("cors")

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://sudhi:123@cluster0.3r6eiqx.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/insert",async (req,res)=>{
    let bookmarkTitle = req.body.bookmarkTitle
    let bookmarkTags = req.body.bookmarkTags
    let bookmarkLink =req.body.bookmarkLink
    let bookmarkDescription = req.body.bookmarkDescription

    const newBookMark = new BookMarks({
        bookmarkTitle : bookmarkTitle,
        bookmarkTags : bookmarkTags,
        bookmarkLink : bookmarkLink,
        bookmarkDescription : bookmarkDescription
    })

    try {
        newBookMark.save();
        console.log("saved successfully")
        res.send("saved successFully")
    } catch (error) {
        console.log(err);
    }

})

app.get("/read",async (req,res)=>{
    BookMarks.find({},(err,result)=>{
        if(err){
            res.send(err)
        }

        res.send(result)
    })
})

app.listen(3001,()=>{
    console.log("server is up and running on port 3001..");
})