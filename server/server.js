import express from 'express'
import mongoose from 'mongoose'
import Products from './models/products.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const port = process.env.PORT || 3000

let app = express()
app.use(cors())
app.use(bodyParser())
mongoose.connect('localhost:27017/testing-react-marketplace-2')

app.get('/products', (req,res)=>{
  Products.find({},(err,products)=>{
    Products.count({}, function(err, total_record){
      if(err){
        res.json({message: "error", detail: err})
      } else {
        res.json({listProducts: products, count: total_record})
      }
    })
  })
})

app.get('/products/:page', (req,res)=>{
  let skip = (req.params.page-1)*5
  let limit = 5
  Products.find({}).skip(skip).limit(5).exec((err,products)=>{
    Products.count({}, function(err, total_record){
      if(err){
        res.json({message: "error", detail: err})
      } else {
        res.json({listProducts: products, count: total_record})
      }
    })
  })
})

app.post('/products', (req,res)=>{
  let newProduct = new Products({product_id: req.body.product_id, name: req.body.name, summary: req.body.summary, description: req.body.description, image: req.body.image})
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
