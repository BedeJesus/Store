
//creating the Schema(table) of Users

const mongoose = require('../db/conn')
const { Schema } = mongoose

const User = mongoose.model('User', new Schema({

    cnpj: {
        type: Number,
        required: true
    },
    business_name: {
        type: String,
        required: true
    },
    cnae: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpires: {
        type: Date
    },
    subscribed: {
        type: Boolean
    },



}, //create 2 new fields: createdAt and updatedAt, witch saves every time a new update is made
    { timestamps: true },
))

module.exports = User


