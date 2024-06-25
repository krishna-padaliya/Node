const express = require('express')
const port = 8000

const app = express()

app.set('view', 'ejs')

const middleware = (req, res, next) => {
    if (req.query.age >= 18){
        return next()
    }
    return res.redirect('/')
}

app.get('/', (req, res) => {
    return res.render('home')
})

app.get('/about', middleware, (req, res) => {
    return res.render('about')
})

app.get('/contact', middleware, (req, res) => {
    return res.render('contact')
})

app.use(middleware)

app.listen(port, (err) => {
    if (err) {
        console.log("Server Not Found")
    }
    else{
        console.log("Server Started at Port:" + port)
    }
})