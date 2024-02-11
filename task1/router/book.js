const express = require('express')
const router = express.Router()
const { Book } = require('../model/book')

// GET THE LIST OF BOOKS
// router.get('/', async (req, res) => {
//     let bookList = await Book.find({})

//     if (!bookList) {
//         return res.send('No Book is found')
//     }

//     return res.send(bookList)
// })

// search by name of the book
router.get('/', async (req, res) => {

    let filter = {}
    if (req.query.bookname) {
        filter.name = new RegExp(req.query.bookname, 'i');
    }

    let books = await Book.find(filter);

    res.send(books)
})

// POST BOOK
router.post('/', async (req, res) => {
    let book = new Book({
        name: req.body.name,
        isReaded: req.body.isReaded
    })

    book = await book.save()

    if (!book) {
        return res.send('Failed to Add the book')
    }
    return res.send(book)
})

// UPDATE BOOK
router.put('/:id', async (req, res) => {
    let book = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isReaded: req.body.isReaded
    }, { new: true })

    if (!book) {
        return res.send('Book is not updated')
    }

    return res.status(200).json({ book: book, message: "Book is updated successfully" })
})

// DELETE BOOK
router.delete('/:id', async (req, res) => {
    let book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
        return res.send('book is not delete')
    }

    return res.send('Book is Deleted Succesfully')
})

module.exports = router