const express = require('express')
const port = 8000

const app = express()

app.set('view engine' , 'ejs')

app.get('/' , (req,res) => {
    return res.render('todo')
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server Not Found")
    }
    else{
        console.log("Server Found at Port:" + port)
    }
})