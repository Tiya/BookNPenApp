//Accessing Mongose package
const mongoose=require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://tiyamartin:Tiya.7256@tiyadatabase.bn7ry.mongodb.net/BookNPen?retryWrites=true&w=majority');

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
//Schema definition
const Schema= mongoose.Schema;

const BookSchema=new Schema({
    bookId : Number,
    bookName : String,
    // bookImage : {
    //     data: Buffer,
    //     contentType: String
    // },
    bookAuthor : String,
    bookCategory : String,
    bookDescription : String

});

//Model creation
var Bookdata= mongoose.model('books',BookSchema);
module.exports=Bookdata;