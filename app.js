const express = require('express');

const app = express();

const path = require ('path');

const publicPath=path.join(__dirname,'/public');

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servidor OK en puerto 3000 http://localhost:3000/')
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
}); 