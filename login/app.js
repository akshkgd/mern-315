const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express();
app.set(('view engine'), 'ejs')
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('login', {status: true})
})
app.post('/login', (req,res)=>{
    let adminEmail = 'ashish@gmail.com';
    let adminPassword = 'admin'
    if(adminEmail === req.body.email && adminPassword === req.body.password){
        console.log('login successful');
        res.render('home')
    }
    else{
        console.log('username or password is wrong')
        res.render('login', {status: fals})
    }
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})