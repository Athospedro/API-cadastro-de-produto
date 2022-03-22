const express = require('express')
const Produtos = require('../models/produtos')
const Comprar = require('../models/compra')

const routerProdutos = express.Router()




routerProdutos.get('/produtos', async(req,res) => { // listagem de todos os produtos 
  
    try {

        let produto = await Produtos.find({})

        res.status(200).json(produto)

    } catch (error) {

        res.status(400).json(error)
    }
})


routerProdutos.get('/produto/:id', async(req, res) => { // buscar produto pelo ID
   
    try {

        let id  = req.params.id      
        let produto = await Produtos.findById(id)

        res.status(200).json(produto)

    } catch (error) {

        res.status(400).json(error)
    }
})

routerProdutos.post('/produto', async(req, res) => { // cadastrar produto 
   
    try {

        let {name, price, categoria, quantity} = req.body
        let produto = new Produtos({name, price, quantity, categoria})
        
        await produto.save()
        
        res.status(200).json(produto)

    } catch (error) {

        res.status(400).json(error)
    }
})

routerProdutos.put('/produto/:id', async(req, res) => { // atualizar produto 

    try {
        
        let id = req.params.id
        let { name, price, quantity} = req.body
        let produto = await Produtos.findByIdAndUpdate(id, {name, price, quantity}, {new:true})

        await produto.save()
      
        res.status(200).json(produto)

    } catch (error) {

        res.status(400).json(error)

    }
})

routerProdutos.get('/categoria/:id/produtos', async(req, res) => { // listar todos os produtos de uma categoria 
    
    try {

        let id = req.params.id 
        let produto = await Produtos.find({categoria: id})

        res.status(200).json(produto)
        
    } catch (error) {
        
        res.status(400).json(error)
    }
})

routerProdutos.delete('/produto/:id', async(req, res) => { // deletar um produto 
    
    try {

        let id = req.params.id
        let produto = await Produtos.findByIdAndDelete(id)

        res.status(200).json(produto)
          
    } catch (error) {
        
        res.status(400).json(error)
    }
})

routerProdutos.post('/comprar', async(req, res) => { // fazer uma compra 
  
   let {itens} =  req.body

   Comprar.fazercompra(itens,res)

})





module.exports = routerProdutos