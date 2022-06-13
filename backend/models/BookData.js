//Accessing Mongose package
const mongoose=require('mongoose');

//Database connection
// const db = "mongodb+srv://admin:1289lash@users.rs1bqhv.mongodb.net/?retryWrites=true&w=majority";
//mongoose.connect('mongodb+srv://tiyamartin:Tiya.7256@tiyadatabase.bn7ry.mongodb.net/BookNPen?retryWrites=true&w=majority');

//Schema definition
const Schema= mongoose.Schema;

const BookSchema=new Schema({
    bookId : Number,
    bookName : String,
    bookFile : {
        data: Buffer,
        contentType: String
    },
    bookAuthor : String,
    bookCategory : String,
    bookDescription : String,
    bookImage : {
        data: Buffer,
        contentType: String
    },

});

//Model creation
var Bookdata= mongoose.model('books',BookSchema);
module.exports=Bookdata;