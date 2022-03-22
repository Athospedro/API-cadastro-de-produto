const mongoose = require('mongoose')

const produtosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
        
    },

    categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
    }

    

})


module.exports = mongoose.model('Produtos', produtosSchema)



//produto id, name, categoriaId, quantidade, preço