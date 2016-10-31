import express from 'express'
import mongoose from 'mongoose'
import Products from './models/products.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const port = process.env.PORT || 3000

let app = express()
app.use(cors())
app.use(bodyParser())
mongoose.connect('localhost:27017/testing-react-marketplace-1')

app.get('/products', (req,res)=>{
  Products.find({},(err,products)=>{
    if(err){
      res.json({message: "error", detail: err})
    } else {
      res.json(products)
    }
  })
})

app.post('/products', (req,res)=>{
  let newProduct = new Products({name: req.body.name, summary: req.body.summary, description: req.body.description, image: req.body.image})
  newProduct.save((err, product)=>{
    if(err){
      res.json({message: "error", detail: err})
    } else {
      res.json(product)
    }
  })
})

app.listen(port, ()=>{
  console.log('listening on', port)
})
