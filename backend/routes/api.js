const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
// const admin = require('../data/admin');

// const db = "mongodb+srv://admin:1289lash@users.rs1bqhv.mongodb.net/?retryWrites=true&w=majority";

const db = "mongodb+srv://FSDGroup3:Fsdgp3.123@cluster0.1f3izav.mongodb.net/?retryWrites=true&w=majority";

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

router.post('/signup', (req,res)=>{

    
    let userData = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      if((userData.username=='Admin')&&(userData.email)=='admin@domain.com'&&(userData.password)=='admin1234'){
        userData.role = 'Admin'
        let payload={subject:userData};
        let token =jwt.sign(payload,'secretKey')
        userData.save()
        res.status(200).send({token});
      }
      else{
         if(!!req.body.user){
            userData.role="User";
            let payload={subject:userData};
            let token =jwt.sign(payload,'secretKey')
            userData.save()
            res.status(200).send({token});

         }
         else {
            userData.role = 'Author';
          // let user = new User(userData);
          userData.save((error,resgisteredUser)=>{
              if(error){
                  console.log(error);
              }
              else{
                  let payload={subject:resgisteredUser};
                  let token =jwt.sign(payload,'secretKey')
                  res.status(200).send({token});
                  // res.status(200).send(resgisteredUser);
              }
          })
      }
    }
})

router.post('/login',(req,res)=>{
    let userData = req.body;

    // let UserData =  {
    //     email:req.body.email,
    //     password:req.body.password
    // };
    
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
                let payload={subject:user};
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token});
                // res.status(200).send(user);
            }
        }
    })

    // for(let i=0;i<admin.length;i++){
    //     if(UserData.email==admin[i].email && UserData.password==admin[i].password)
    //                 {
    //                 let payload={subject:admin};
    //                 let token =jwt.sign(payload,'secretKey')
    //                 res.status(200).send({token});
    //                 }
    // }
})



module.exports = router;