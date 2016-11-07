var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var invSchema = mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    url:String
    }, {
        timestamps:true
    })

module.exports= mongoose.model('inventories', invSchema)
