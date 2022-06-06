const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://admin:1289lash@users.rs1bqhv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, err=>{
    if(err){
        console.log('Error!' + err);
    }
    else{
        console.log('Connected to MongoDB')
    }
})


router.get('/',(req,res)=>{
    res.send('Hello from API route');
})

router.post('/signup',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,resgisteredUser)=>{
        if(error){
            console.log(error);
        }
        else{
            res.status(200).send(resgisteredUser);
        }
    })
})

router.post('/login',(req,res)=>{
    let userData = req.body;

    User.findOne({email : userData.email},(error,user)=>
    {
        if(error)
        {
            console.log(error);
        }
        else{
            if(!user)
            {
                res.status(401).send('Invalid Email');
            }
            else
            if(user.password!== userData.password)
            {
                res.status(401).send('Invalid Password');
            }
            else{
                res.status(200).send(user);
            }
        }
    })
})
module.exports = router;