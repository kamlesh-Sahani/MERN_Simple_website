const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const {Register,Message} = require('./db/Schema');
const cors = require('cors');
const jwt = require('jsonwebtoken');


const SECRET_KEY= "mynameiskamlesh";


app.use(cors());

app.use(express.json());
require('./db/Schema');
dotenv.config({path:"./config.env"});

app.get('/',(req,res)=>{
    res.send("HOme PAGE | WELCOME BACK");
});






// Register  form

app.post('/register',(req,res)=>{
    const {name,email,work,phone,password,confirmPassword} = req.body
    if(!name || !email || !work || !phone || !password || !confirmPassword){
        return res.json({error:"Plz fill filed  properly"});
    }

    // check the user is Already exist Or not 
    Register.findOne({email:email})
    .then((userExist)=>{
        // if user is exist then it return Back

        if(userExist){
            return res.json({error:"User is Already exist"});
        }

        // if the user is not Exist then create a new documet

       const  register = new Register (req.body);

        // save or upload  the document 

        register.save()
        .then(()=>{
            res.json({success:true, message:"Register Successfuly"});
        })
        .catch((error)=>{
            res.json({success:false,error:`Error in registration  : ${error}`});
        })

    }).catch((error)=>{
        res.json({success:false,error:`error in registration 1 ${error}`})
    })
})


app.post("/login",(req,res)=>{
    const {email,password} = req.body;

   const userLogin =  Register.findOne({email:email,password:password})
    .then((userFind)=>{
        if(userFind){
          
            // generate the Token
            const user = {id:userFind._id,email:userFind.email};
            const token = jwt.sign(user,SECRET_KEY);
            res.cookie("jwttoken",token,{
                httpOnly:true,
                
            });

            //return the whole value to fronted or client side so that fronted dev can use the response and do authentication
           return res.json({success:true,token:token,message:"Login Successful"});

        }
        res.json({success:false, message:"User is Not Found please SigbUp"})
    }).catch((error)=>{
        res.json({success:false,message:`error in Login ${error }`})
    })
})


// message 

app.post('/message',(req,res)=>{
    const mess = new Message(req.body);
    mess.save().then(()=>{
        res.json({message:"succesful save the message"});
    }).catch((error)=>{
        res.json({error:`error on message save ${error}`})
    })
})


//getdata from database 

app.get("/getdata",(req,res)=>{
    Register.find().then((users)=>{
        res.json(users);
    })
    .catch((error)=>{
        res.json({error:`error in data fetching ${error}`});
    })        
})





const port = process.env.PORT;
 app.listen(port,()=>{
    console.log(`Server is Started on ${port}`);
 })

 console.log(port);