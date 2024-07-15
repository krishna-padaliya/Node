const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    pizzaname:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
})

const admin = mongoose.model('admin' , adminSchema)
module.exports = admin