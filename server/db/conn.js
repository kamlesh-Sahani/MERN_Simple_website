const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/p2")
.then(()=>console.log("connection sucessfull"))
.catch((error)=>console.log(`Database connection error ${error}`))