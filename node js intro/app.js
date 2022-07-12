const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.get('/login', (req,res,next)=>{
    res.send('<h1>this is login page</h1>');
})
app.get('/', (req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html')
})
app.post('/enrollment',(req,res)=>{
    console.log(req.body)
    res.render('enrollmentSuccess', {user: req.body.name, email:req.body.email})
})
app.get('*', (req,res)=>{
    res.send('<h1>Page not found</h1>');
})


// mvc -> model view and controllers -> template engine ->



app.listen(3000,()=>{
    console.log('3000')
})