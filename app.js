const express=require('express');
const { static, urlencoded } = require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
var monsch=mongoose.Schema;
var username=new monsch({user:String,pass:String})
app.listen(4000,()=>{console.log('port is running on 4000')});

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/',(req,res)=>{
    
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/',urlencodedParser,(req,res)=>{

    var usermodel=mongoose.model('usermodel',username);
    var nm=new usermodel({user:req.body.user,pass:req.body.pass})
    console.log(nm.user)
     nm.save();
   
 res.end()
})
