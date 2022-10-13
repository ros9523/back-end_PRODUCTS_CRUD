const express= require('express');
const initModels = require('./models/initModels');
const config = require('./config')
const db =require('./utils/database')
const productRouter= require('./products/products.router')

const app = express()

db.authenticate()
    .then(()=>console.log('successfully'))
    .catch((err)=>  console.log(err))

db.sync()
.then(()=>console.log('Database Synced'))
.catch (err => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({"message": "OK!"})
})

app.use('/products', productRouter)

app.listen(config.port, ()=>{
    console.log(`Server started at port ${config.port}`)
})


