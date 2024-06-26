const express = require('express')
const port = 9000
const app = express()

const db = require('./config/database.js')
const adminTable = require ('./model/adminTable')

app.set('view engine' , 'ejs')
app.use(express.urlencoded())

app.get('/' , (req,res)=>{
    res.render('movie')
})

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



app.get('/deleteData/:id',(req,res)=>{
    let id = req.params.id
    adminTable.findByIdAndDelete(id)
    .then((data)=>{
        return res.redirect('/form')
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/editData/:id',(req,res)=>{
    let id = req.params.id
    adminTable.findById(id)
    .then((single)=>{
        return res.render('edit',{
        single
        })
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/updateData',(req,res)=>{
    let id = req.body.editid
    adminTable.findByIdAndUpdate(id,{
       moviename : req.body.moviename,
       fname : req.body.fname,
       lname : req.body.lname,
       city : req.body.city,
       state : req.body.state,
       row : req.body.row,
       seatnum : req.body.seatnum
    }).then((success)=>{
        return res.redirect("/form")
    })
})


app.post('/insertData',(req,res)=>{
    const {moviename,fname,lname,city,state,row,seatnum} = req.body

    adminTable.create({
       moviename : moviename,
       fname : fname,
       lname : lname,
       city : city,
       state : state,
       row : row,
       seatnum : seatnum
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