import mongoose from 'mongoose'
let Schema = mongoose.Schema

let productsSchema = new Schema({
  name: String,
  summary: String,
  description: String,
  image: String
})

let Products = mongoose.model('products', productsSchema)
export default Products
