const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


app.get('/about', (req,res)=>{
    res.send('<h1>This is the about page</h1>')
})

app.get('/', (req, res)=>{
    res.render('index', {name:'nayan'});
    // console.log(__dirname)
})
app.post('/enrollment', (req,res)=>{
    // console.log(req.body)
    res.render('enrollmentSuccess', {name: req.body.name, email: req.body.email})
})
app.get('*',(req, res)=>{
    res.send('<h1>Page not found!!</h1>')
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})