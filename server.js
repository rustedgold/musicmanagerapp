const express = require('express');
const app = express();
const path =require('path')

app.use(express.static(_dirname + '/dist'))
app.listen(process.env.PORT||8080)

//path location
app.get('/*',function(req,res){
    res.sendFile(path.join(_dirname+'/dist/index.html'))
})
