const express = require ('express')
const port = 8000
const app = express()
const routing = require('./routes/mainRoutes')

app.set('view engine' , 'ejs')
app.use(express.static('public'));
app.use('/' , routing)

app.listen(port , (err)=>{
    if(err){
        console.log("Please check connection")
    }
    else{
        console.log("Server started at",port)
    }
})