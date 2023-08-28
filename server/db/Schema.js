const mongoose = require('mongoose');

require('./conn.js')
//schema    

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true
    },
    work:String,
    phone:{
        type: Number,
        required:true
    },
    password:String,
    confirmPassword:String,
    tokens:[
        {
            token:{
                type:String,
                required:true
            }

        }
    ]
})

const Register = new mongoose.model("Register",registerSchema);

const messageSchema = new mongoose.Schema({
  name:String,
  phone:String,
  email:String,
  message:String
})

const Message = new mongoose.model("Message",messageSchema);
module.exports = {
    Register: Register,
    Message: Message,
};