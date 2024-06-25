const express = require('express')
const port = 8080

const app = express()
const path = require('path')

app.set("view engine" , "ejs")

app.use('/',express.static(path.join(__dirname,'/public')))

app.get('/', (req, res) => {
    return res.render('home')
})

app.get('/about',(req,res)=>{
    return res.render('about')
})

app.get('/work',(req,res)=>{
    return res.render('work')
})

app.get('/category',(req,res)=>{
    return res.render('category')
})

app.listen(port , (err)=>{
    if(err){
        console.log("Server Not Found")
    }
    else{
        console.log("Server Found at Port:",port)
    }
})