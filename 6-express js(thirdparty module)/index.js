// install -> npm i exress
//            npm i ejs 
//            npm i nodemon

const express = require('express')
const port = 8000

const app = express()

app.set('view engine' , 'ejs')
app.get('/' , (req,res)=>{  
    return res.render('Navbar')
})
app.get('/about' , (req,res)=>{
    return res.render('about')
})

app.listen(port,(err)=>{
    if(err){
        console.log("server not started")
    }
    else{
        console.log("server started at:"+port)
    }
})