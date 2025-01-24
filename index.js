const express = require("express");
const app = express();
let port = 8080;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//creating a connection
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(()=>{
    console.log("connection was successfull")
})
.catch(()=>{
    console.log("sorry :(")
})

// let chat1 = new Chat({
//     from:"rahul",
//     to:"udayan",
//     messege:"goodmorning",
//     created_on:new Date()
// });

// chat1.save()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


//index route 
app.get("/chat",(req,res)=>{
    Chat.find({}).then((result)=>{
        let chats = result;
        res.render("index.ejs",{chats});
    }).catch((error)=>{
        console.log(error);
    })
})

//geting new chat form
app.get("/chat/new",(req,res)=>{
    res.render("form.ejs");
})

//home path
app.get("/",(req,res)=>{
    res.send("wow");
})

//create route 
app.post("/chat",(req,res)=>{
    let {from,messege,to} = req.body;
    const newUser = new Chat({from:from,messege:messege,to:to,created_on:new Date()});
    newUser.save().then((result)=>{
        res.redirect("/chat")
    }).catch((error)=>{
        console.log(error);
    })
})



app.listen(port,()=>{
    console.log("app is listening on port 8080")
})