const express = require('express');
const app = express()


app.use('/login', (req,res,next)=>{
    res.send('<h1>this is login page</h1>')
})
app.use('/', (req,res)=>{
    res.send('<h1>this is homepage</h1>')
})


// mvc -> model view and controllers -> template engine ->



app.listen(3000)