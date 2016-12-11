const express = require('express');
const hbs = require('hbs');
const multer = require('multer');

const port = process.env.PORT || 3000;
var app = express();

var upload = multer({dest:'/'});

app.set('view engine','hbs');

app.get('/',(req,res)=>{

    res.render('main.hbs');
}); 

app.post('/',upload.single('filesize'),(req,res)=>{

    res.send({size:req.file.size})
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});