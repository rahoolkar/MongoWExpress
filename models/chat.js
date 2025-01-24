const mongoose = require('mongoose');

let chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    messege:{
        type:String,
        maxLength:80
    },
    created_on:{
        type:Date,
        required:true
    }
})

let Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;