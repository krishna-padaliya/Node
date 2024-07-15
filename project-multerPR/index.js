const express = require('express')
const port = 8000
const app = express()

const path = require("path")
const multer = require("multer")
const fs = require('fs')

const db = require('./config/database.js')
const adminTable = require ('./model/adminTable')



app.set('view engine' , 'ejs')

// app.use(express.urlencoded())
app.use(express.urlencoded({extended:true}))
app.use("/Images",express.static(path.join(__dirname,"Images")))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage })

app.get('/' , (req,res)=>{
    res.render('pizzashop')
})

app.get('/form', (req,res)=>{
//  res.render('form')
    adminTable.find({}).then((allData)=>{
    return res.render('form',{
        record : allData,
        imagePath: null
    })
    }).catch((err)=>{
    console.log(err)
    })
    // res.render("form" , {imagePath : null})
    
})

app.post("/form",upload.single('image'),(req , res)=>{
    if(req.file){
      const imagePath = "/Images/"+ req.file.filename
      res.render("upload",{imagePath : imagePath})
    }else{
      res.render("upload",{imagePath : null})
    }
    // res.send("Done")    
  })

app.get('/deleteData/:id',(req,res)=>{
    let id = req.params.id
    adminTable.findByIdAndDelete(id)
    .then((data)=>{
        // return res.redirect('/form')
        const imagePath = req.body.imagePath
      const absolutePath = path.join(__dirname, imagePath)

      fs.unlink(absolutePath, (err) => {
        if (err) {
          console.log("Cannot Delete Image")
        } else {
          console.log("Deleted")
        }
      })
      return res.redirect('/form')
    //   res.render('form', {imagePath : null})
    }).catch((err)=>{
        console.log(err)
    })
    // const imagePath = req.body.imagePath
    // const absoluatePath = path.join(__dirname,imagePath)

    // fs.unlink(absoluatePath , (err)=>{
    //   if(err){
    //     console.log("Cannot Delete Image")
    //   }
    //   else{
    //     console.log("Deleted")
    //   }
    //   res.render('form', {imagePath : null})
    // })
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
       pizzaname : pizzaname,
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