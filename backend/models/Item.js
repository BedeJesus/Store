
//creating the Schema(table) of Pets

const mongoose = require('../db/conn')
const { Schema } = mongoose

const Item = mongoose.model('Item', new Schema({
    title: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    long_desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    available: {
        type: Boolean
    },
    user: Object,
    renter: Object

}, //create 2 new fields: createdAt and updatedAt, witch saves every time a new update is made
    { timestamps: true },
))

module.exports = Item

