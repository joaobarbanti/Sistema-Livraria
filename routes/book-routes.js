const { Router } = require('express')
const express = require('express')
const Book = require('../model/Book')
const router = Router()
const booksController = require("../controllers/books-controller")

//aqui falamos nossas rotas
router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get("/:id", booksController.getById)
router.put("/:id",booksController.updateBook)
router.delete("/:id",booksController.deleteBook)

module.exports = router