const express=require(`express`);
const booksRouter=express.Router();
const Bookdata = require('../models/BookData');

const path = require('path');
var fs = require('fs');

console.log("in addBookRoutes");
  const cors = require('cors');
  var bodyparser=require('body-parser');
  
  booksRouter.use(cors());
  booksRouter.use(bodyparser.json());

  booksRouter.get('/', function (req, res) {
    Bookdata.find()
            .then(function(books){
              console.log(books);
             
                res.send(books);
            })
  })    

  booksRouter.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE')
    console.log(req.body);
   
    var book = {       
       
        bookName : req.body.book.bookName,
        bookAuthor : req.body.book.bookAuthor,
        bookCategory : req.body.book.bookCategory,
        bookDescription : req.body.book.bookDescription,
   }       
   var book = new Bookdata(book);
   book.save();
});
  module.exports=booksRouter;

