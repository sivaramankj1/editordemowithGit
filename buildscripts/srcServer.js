var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;
var app = express();
app.get('/',function(req,res){
    res.sendfile(path.join(__dirname,'../src/index.html'));
});
app.get('/test',function(req,res){
    res.download(path.join(__dirname,'../src/sample.json'));
});
app.listen(port,function(err){
    if(err)
    {
        console.log(err +" test")
    }
    else{
        open("http://localhost:" + port);
    }
});
