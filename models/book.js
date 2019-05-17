const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String},
    author: { type: String},
    description: { type: String},
    imageURL: {type: String},
    link: {type: String},
    saved: {type: Boolean}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book