const express = require('express')
const port = 9000

const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const routing = require('./routes/mainRoutes')

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine' , 'ejs')
app.use(express.static('public'));
app.use('/' , routing)

const users = {}

app.get('/index',(req,res)=>{
     res.render('index' , {username : req.cookies.username})  
})

app.post('/signup' , (req,res)=>{
    const{username , password} = req.body

    if(users[username]){
        res.send('Already Logged in. <a href="/signup">SignUp</a>')
    }else{
        users[username] = password
        res.cookie("username" , username)
        res.redirect('/index')
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
        console.log('server not responding')
    }
    else{
        console.log('server responding',port)
    }
})