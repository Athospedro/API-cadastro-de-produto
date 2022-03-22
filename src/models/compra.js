
const Produtos = require('./produtos')

class Comprar { // metodo para fazer uma compra 
  

    async fazercompra(itens, res) {

      try {
        let resposta = {}
        resposta.itens = []
        let valorTotal = 0

        for(let i = 0; i < itens.length; i++){

           let produto = await Produtos.findById(itens[i].id)

           valorTotal  += produto.price * itens[i].quantidade

           produto.quantity -= itens[i].quantidade  
        
           produto.save()
           
           resposta.itens.push({id: produto.id, quantidade:itens[i].quantidade, valorUnitario:produto.price})
          
         }

          resposta.valorTotal = valorTotal
       
          res.status(200).json(resposta)

        } catch (error) {

          res.status(400).json(error)

        }

    }


}

module.exports = new Comprar

