const express = require('express')
const port = 4000
const app = express()

const db = require('./config/database.js')
const adminTable = require ('./model/adminTable')

app.set('view engine' , 'ejs')
app.use(express.urlencoded())

app.get('/form', (req,res)=>{
//  res.render('form')
    adminTable.find({}).then((allData)=>{
    return res.render('form',{
        record : allData
    })
    }).catch((err)=>{
    console.log(err)
    })
    
})


app.post('/insertData',(req,res)=>{
    const {username,pass} = req.body

    adminTable.create({
       username : username,
       pass : pass
    }).then((data)=>{
     
        console.log(data)
       return res.redirect('/form')
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log("server not connected")
    }
    else{
        console.log("server connected",port)
    }
})