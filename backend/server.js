const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api')


const app =express();
app.use(cors());
app.use(bodyParser.json());

app.use(function(res,req,next)
    {
        res.header("Access-Control-Allow-Origin","*")
        res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
        next();
})
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send('Hello from Server');
})

const booksRouter=require('./routes/addBookRoutes');
app.use('/books',booksRouter);

const authorRouter=require('./routes/addAuthorRoutes');
app.use('/authors',authorRouter);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });