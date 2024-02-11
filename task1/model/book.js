const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isReaded: {
        type: Boolean,
        require: true
    }
})

module.exports.Book = mongoose.model('Book', bookSchema)