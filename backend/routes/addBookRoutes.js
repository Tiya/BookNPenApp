const express=require(`express`);
const booksRouter=express.Router();
const Bookdata = require('../models/BookData');
const multer=require('multer')

const path = require('path');
var fs = require('fs');

console.log("in addBookRoutes");
  const cors = require('cors');
  var bodyparser=require('body-parser');
  booksRouter.use(bodyparser.urlencoded({
    extended: true
}));
  var fs = require('fs');
var dir = './public/uploads';

  if (!fs.existsSync(dir)){
    console.log("new: "+dir);
      fs.mkdirSync(dir);
  }
  console.log("old: "+dir);
  
  booksRouter.use(cors());
  booksRouter.use(bodyparser.json());
  const storage = multer.diskStorage({
    destination:(req,file, callback)=>{
      callback(null, './public/uploads')
    },
    filename:(req, file, callback)=>{
      callback(null, file.fieldname+Date.now()+path.extname(file.originalname));
    }
  })
  var upload = multer({
    storage: storage,
    limits:{
      fileSize: 1000000
    },
    fileFilter:function(req,file,callback){
      checkFileType(file, callback);
    }
  })
//Check file type
function checkFileType(file, callback){

  // allowed extension
  // const filetypes = /jpeg|jpg|png|gif/;
  const filetypes = /jpeg|jpg|png|gif|pdf/;
  //check extension
  const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype=filetypes.test(file.mimetype);
  if(mimetype&&extname){
    return callback(null, true);
  }else{
    callback('Error: Images only');
  }
}


  booksRouter.get('/', function (req, res) {
    Bookdata.find()
            .then(function(books){
              console.log(books);
             
                res.send(books);
            })
  })    

  booksRouter.post('/insert',verifyToken, upload.fields([
    {name: "file", maxCount: 1},
    {name: "image", maxCount: 1},
  ]),function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
    //console.log(req.body.bookName);
    //const file=req.files;
    //console.log("file::::"+req.files.file[0].filename);
    //console.log("images:::"+req.files.image[0].filename);
   
    var book = {       
       
        bookName : req.body.bookName,
        bookAuthor : req.body.bookAuthor,
        bookCategory : req.body.bookCategory,
        bookDescription : req.body.bookDescription,
        bookFile: {
          data: fs.readFileSync(path.join('./public/uploads/' + req.files.file[0].filename)), 
          contentType: 'application/pdf',
              },
        bookImage: {
                data: fs.readFileSync(path.join('./public/uploads/' + req.files.image[0].filename)), 
                contentType: 'images/png',
                    }
   }       
   
   var book = new Bookdata(book);
  // console.log(book);
  // console.log(book.bookImage);
   book.save();
});
  module.exports=booksRouter;

  function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorised Request');
    }
    let token = req.headers.authorization.split(' ')[1]
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