const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api')
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://FSDGroup3:Fsdgp3.123@cluster0.1f3izav.mongodb.net/BookNPen?retryWrites=true&w=majority');

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send('Hello from Server');
})

const booksRouter=require('./routes/addBookRoutes');
app.use('/books',booksRouter);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });