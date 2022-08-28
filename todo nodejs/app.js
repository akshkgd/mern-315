const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const app = express();
let todos = []
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req,res)=>{
    res.render('home', {todoArray: todos})
})
app.post('/add-task', (req, res)=>{
    let todo = req.body.task;
    todos.push(todo);
    res.redirect('/')
})
app.listen(3000)