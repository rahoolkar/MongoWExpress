const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(()=>{
    console.log("connection was successfull")
})
.catch(()=>{
    console.log("sorry :(")
})

let data = [
    {
    from:"pankaj",
    to:"rohit",
    messege:"hi hello sir?",
    created_on:new Date()
    },
    {
    from:"atul",
    to:"gourav",
    messege:"aaj ki class hai?",
    created_on:new Date()
    },
    {
    from:"kaku",
    to:"guga",
    messege:"i love you",
    created_on:new Date()
    },
    {
    from:"amrita",
    to:"utpal",
    messege:"salary ab aayegii?",
    created_on:new Date()
    },
    {
    from:"charu",
    to:"tam",
    messege:"you are gay",
    created_on:new Date()
    }
]

Chat.insertMany(data).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});