const express = require('express')
const Categoria = require('../models/categoria')

const routerCategoria = express.Router()


routerCategoria.get('/categorias', async(req, res) => { // listar categorias 
    
    try {

        let categoria = await Categoria.find({})

        res.status(200).json(categoria)

    } catch (error) {

        res.status(400).json(error)
    }
})

routerCategoria.post('/categoria', async(req, res) => { // cadastrar categoria 
    
    try {

        let {name} = req.body
        let categoria = new Categoria({name})

        await categoria.save()

        res.status(200).json(categoria)

    } catch (error) {

        res.status(400).json(error)

    }
})

routerCategoria.put('/categoria/:id', async(req, res) => { // atualizar uma categoria 
    
    try {

        let id = req.params.id
        let {name} = req.body
        let categoria = await Categoria.findByIdAndUpdate(id,{name}, {new:true})

        res.status(200).json(categoria)
        
    } catch (error) {

        res.status(400).json(error)
    }
})

routerCategoria.delete('/categoria/:id', async(req, res) => { // deletar uma categoria
    
    try {

        let id = req.params.id
        let categoria  = await Categoria.findByIdAndDelete(id)

        res.status(200).json(categoria)

    } catch (error) {

        res.status(400).json(error)
    }
})

module.exports = routerCategoria