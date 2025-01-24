const express = require("express");
const app = express();
let port = 8080;
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

main().then(()=>{
    console.log("connection was successfull")
})
.catch(()=>{
    console.log("sorry :(")
})

app.listen(port,()=>{
    console.log("app is listening on port 8080")
})