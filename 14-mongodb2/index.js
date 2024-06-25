const express = require('express')

const port = 3030

const app = express()

const db = require('./config/database')

app.set('view engine' , 'ejs')
const path = require('path')

app.use('/',express.static(path.join(__dirname,'/public')))

app.get('/' , (req,res)=>{
    return res.render('form')
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server not Found")
    }
    else{
        console.log("Server Found at:" + port)
    }
})