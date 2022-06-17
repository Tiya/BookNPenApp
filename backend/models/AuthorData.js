// Accessing Mongoose Package
const mongoose = require("mongoose");
// Creating Database connection

// mongoose.connect("mongodb+srv://admin:1289lash@users.rs1bqhv.mongodb.net/?retryWrites=true&w=majority");
//mongoose.connect('mongodb+srv://tiyamartin:Tiya.7256@tiyadatabase.bn7ry.mongodb.net/BookNPen?retryWrites=true&w=majority');

// mongoose.connect('mongodb+srv://FSDGroup3:Fsdgp3.123@cluster0.1f3izav.mongodb.net/BookNPen?retryWrites=true&w=majority');

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})


// Schema Definition from Mongoose.Schema package
const Schema = mongoose.Schema;

// Creating a new Schema named BookSchema using constructor Schema
const AuthorSchema = new Schema({
    authorname:{type:String,required: true },
    authorimage: {
        data: Buffer,
        contentType: String
        // required: true
    },
    aboutauthor: {type:String,required: true }
});

// In order to use the new Schema created we need to create a Model using mongoose.model package ("Collection Name", "Schema Name")
const Authordata = mongoose.model("authordata",AuthorSchema);

// Exporting the Model created (Authordata)
module.exports = Authordata