const mongoose = require( "mongoose" );

const BookMarkSchema = new mongoose.Schema({
    bookmarkTitle : {
        type : String,
        required : true
    },
    bookmarkTags:{
        type : Array
    },
    bookmarkLink:{
        type : String,
        required: true,
        default :"https://www.google.com/",
        unique : true
    },
    bookmarkDescription:{
        type : String
    },
    starred:{
        type : Boolean,
        default : false
    }
})

const BookMarks = mongoose.model("BookMarks",BookMarkSchema);
module.exports = BookMarks;