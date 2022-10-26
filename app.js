const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(cors())
app.use("/books", router)

//aqui se conectamos ao banco como admin e criamos nosso localhost na porta 5000
mongoose.connect('mongodb://localhost/store', {

useNewUrlParser: true, 
useUnifiedTopology: true
    
})

const db = mongoose.connection

db.once("open", ()=>{console.log("banco de dados carregado")})

app.listen(PORT,()=>{

  console.log("servidor rodando na porta 3000")
  
  })