const mongoose = require( "mongoose" );

const BookMarkSchema = new mongoose.Schema({
    bookmarkTitle : {
        type : String,
        required : true
    },
    bookmarkTags:{
        type : Array
    },
    bookmarkUrl:{
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

const BookMarkModel = mongoose.model("BookMarkModel",BookMarkSchema);
module.exports = BookMarkModel;