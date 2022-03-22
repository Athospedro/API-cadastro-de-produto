const express = require('express')

const routerProdutos = require('./src/routes/produtos')
const routerCategoria = require('./src/routes/categorias')

require('./config/dataBase')

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', routerCategoria)
app.use('/', routerProdutos)





app.listen(3000, () => console.log('Servidor rodando!'))