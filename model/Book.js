const mongoose = require('mongoose')


const Schema = mongoose.Schema
//aqui criamos o esquema dos elementos de nossa coleção que seria os livros
const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      available: {
        type: Boolean,
      },
      image: {
        type: String,
        required: true,
      },
    });
    module.exports = mongoose.model("Book", bookSchema) //aqui importamos esse modelo com o nome de Book e passando o esquema dele