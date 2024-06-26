const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    moviename:{
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
    row:{
        type:String,
        required:true
    },
    seatnum:{
        type:String,
        required:true
    },
})

const admin = mongoose.model('admin' , adminSchema)
module.exports = admin