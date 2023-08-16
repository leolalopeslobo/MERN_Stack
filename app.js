const express = require('express');
const connectDB = require('./db');

const app = express();

app.listen(2000, 'localhost', ()=>{
    console.log("Listening on port 2000");
});

connectDB();