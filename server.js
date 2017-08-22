var express = require('express');
var mongoose = require('mongoose');
var Task = require('./model/task');
var app = express();

var bodyParser = require('body-parser');
app.use('/',express.static('src'));
app.use(bodyParser.json());
app.use(bodyParser.text());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do',(err)=>{
err && console.error(err);
});

app.set('view-engine','ejs');
app.engine('.html', require('ejs').renderFile);
app.get('/',function(req,res){
res.render('blank.ejs');
})


app.delete('/tasks/task',function(req,res){
    const _id = req.body._id;
    Task.remove({_id},(err)=>{
        res.send({removed:Boolean(!(err))});
    });
});

app.get('/tasks',function(req,res){
    Task.find({},(err,tasks) =>{
        res.send(tasks);
    });
});



app.post('/task',function(req,res){
    const task = new Task(req.body);
    task.save((err,task) =>{
        if(err|| !task){
        }
        else{
        }
    });
    
     res.send(task);
});
    
app.listen(3000, "localhost", function () {
  console.log("app is listening on port: 3000");
})