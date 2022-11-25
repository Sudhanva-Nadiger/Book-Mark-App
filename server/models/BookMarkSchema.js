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
        required: true
    },
    bookmarkDescription:{
        type : String
    }
})

const BookMarkModel = mongoose.model("BookMarkModel",BookMarkSchema);
module.exports = BookMarkModel;