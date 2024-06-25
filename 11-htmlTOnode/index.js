const express = require('express')
const port = 8000

const app = express()
const path = require('path')

app.set('view engine', 'ejs')

app.use('/',express.static(path.join(__dirname , '/public')))

app.get('/', (req, res) => {
    return res.render('admin')
})

app.get('/charts', (req, res) => {
    return res.render('charts')
})

app.get('/widgets', (req, res) => {
    return res.render('widgets')
})

app.get('/tables', (req,res) => {
    return res.render('tables')
})

app.get('/fullwidth', (req,res) => {
    return res.render('fullwidth')
})

app.get('/form-basic', (req,res) => {
    return res.render('form-basic')
})

app.get('/form-wizard', (req,res) => {
    return res.render('form-wizard')
})

app.get('/buttons', (req,res) => {
    return res.render('buttons')
})

app.get('/icon1', (req,res) => {
    return res.render('icon1')
})

app.get('/icon2', (req,res) => {
    return res.render('icon2')
})

app.get('/elements', (req,res) => {
    return res.render('elements')
})


app.get('/admin2', (req,res) => {
    return res.render('admin2')
})

app.get('/gallery', (req,res) => {
    return res.render('gallery')
})

app.get('/calender', (req,res) => {
    return res.render('calender')
})

app.get('/invoice', (req,res) => {
    return res.render('invoice')
})

app.get('/chat', (req,res) => {
    return res.render('chat')
})

app.get('/login', (req,res) => {
    return res.render('login')
})

app.get('/register', (req,res) => {
    return res.render('register')
})

app.get('/error-403', (req,res) => {
    return res.render('error-403')
})

app.get('/error-404', (req,res) => {
    return res.render('error-404')
})

app.get('/error-405', (req,res) => {
    return res.render('error-405')
})

app.get('/error-500', (req,res) => {
    return res.render('<error-500>      </error-500>')
})



app.listen(port, (err) => {
    if (err) {
        console.log("Server Not Found")
    }
    else{
        console.log("Server Started at Port:" + port)
    }
})