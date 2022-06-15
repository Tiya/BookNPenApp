const express = require("express");
const Authordata = require("../model/Authordata");
const authorRouter =express.Router();
const multer = require('multer');
const path = require('path');

require("dotenv")
  .config();

  var fs = require('fs');

  console.log("in addAuthorRoutes");
    const cors = require('cors');
    var bodyparser=require('body-parser');
    authorRouter.use(bodyparser.urlencoded({
      extended: true
  }));
    var fs = require('fs');
  var dir = './public/uploads';
  
    if (!fs.existsSync(dir)){
      console.log("new: "+dir);
        fs.mkdirSync(dir);
    }
    console.log("old: "+dir);
    authorRouter.use(cors());
  authorRouter.use(bodyparser.json());

// Multer Setting Up
const storage=multer.diskStorage({
    //destination for files
    destination:function(request,file,cb){
      cb(null,'./public/uploads');
    },
    //Add back the extensions
    filename:function(request,file, cb){
     // Defining file name+timestamp+.file-extension
      cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
    }
  })
  
  //Upload parameters for multer
  
  const upload = multer({ 
    storage: storage,
    limits:{
      fileSize: 1000000     //upto 1MB files only
    },
    fileFilter:function(req,file,cb){
      checkFileType(file, cb);
    }
  });
  
  
  //Checking file types we are inputing
  
  function checkFileType(file, cb){
  
    // Only Image type extension
    const filetypes = /jpeg|jpg|png|gif/; 
    //Checking extension
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime
    const mimetype=filetypes.test(file.mimetype);
    if(mimetype&&extname){
      return cb(null, true);
    }else{
      cb('Error: Only Images allowed');
    }
  }


  authorRouter.get('/', function (req, res) {
    Authordata.find()
            .then(function(authors){
              console.log(authors);
             
                res.send(authors);
            })
  })    

  authorRouter.post('/insert',verifyToken, upload.fields([
    {name: "image", maxCount: 1},
  ]),function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
  
    var author = {       
        authorname : req.body.authorname,
        aboutauthor : req.body.aboutauthor,
        authorimage: {
                data: fs.readFileSync(path.join('./public/uploads/' + req.files.image[0].filename)), 
                contentType: 'images/png',
                    }
   }       
   
   var authors = new Authordata(author);
  // console.log(author);
   authors.save();
});
  module.exports=authorRouter;

  function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorised Request');
    }
    let token = req.headers.authorization.split('')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorised Request');
    }
    let payload = jwt.verify(token, 'security');
    if(!payload){
        return res.status(401).send('Unauthorised Request');
    }
    req.userId = payload.subject;
    next()
}