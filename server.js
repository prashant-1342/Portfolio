
const express = require('express');
const app =express();
const bodyParser = require('body-parser')
const fs = require('fs')
const path =require('path');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit',(req,res)=>{
  const {name,email,message} = req.body;

  const data = `Name: ${name} , Email: ${email} , Message: ${message}`;
  console.log(data);

  fs.appendFile('messages.txt',data,(err)=>{
    if(err){
      console.log('there is a error in you server')
    }
    res.send('You message are sent to server');
  })
})

app.listen(port,()=>{
  console.log('marnie');  
})