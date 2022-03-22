const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('link db, "mongoose"', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log('Banco conectado!'))
.catch((error) => console.log(error))
    
   