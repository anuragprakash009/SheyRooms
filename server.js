const express = require('express');
const app = express();
const port = 5000||process.env.PORT
const dbConfig = require('./db')



app.listen(port,()=>{
    console.log(`Running on ${port}`);
})