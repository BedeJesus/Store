
//creating the Schema(table) of Users

const mongoose = require('../db/conn')
const {Schema} = mongoose

const User = mongoose.model('User',new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },

}, //create 2 new fields: createdAt and updatedAt, witch saves every time a new update is made
{timestamps:true},
))

module.exports = User


