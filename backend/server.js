const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')

const PORT = 3000;
const app =express();

app.use(bodyParser.json());
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send('Hello from Server');
})

app.listen(PORT,()=>{
    console.log('Server is running on localhost'+PORT)
})