const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/form')

const db = mongoose.connection

db.on('connected',(err)=>{
    if(err){
        console.log("DB not connection")
    }
    else{
        console.log("DB Connection!!")
    }
})

module.exports = db