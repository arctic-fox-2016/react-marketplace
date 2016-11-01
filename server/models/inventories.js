var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var invSchema = mongoose.Schema({
    name:String,
    price:Number,
    url:String
    }, {
        timestamps:true
    })

module.exports= mongoose.model('inventories', invSchema)
