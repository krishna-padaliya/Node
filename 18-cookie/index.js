const express = require('express')

const port = 9000

const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs')
app.set("views" , path.join(__dirname , 'views'))

const users = {}

app.get('/',(req,res)=>{
     res.render('index' , {username : req.cookies.username})  
})

app.post('/signup' , (req,res)=>{
    const{username , password} = req.body

    if(users[username]){
        res.send('Already Logged in. <a href="/signup">SignUp</a>')
    }else{
        users[username] = password
        res.cookie("username" , username)
        res.redirect('/')
    }
})

app.get('/signup' , (req,res)=>{
     res.render('signup')
})

app.get('/signout' , (req,res)=>{
    res.clearCookie('username')
    res.redirect('/')
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server Not Responding")
    }
    else{
        console.log("Server Responding at:",port)
    }
})