var Inventories = require('../models/inventories')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus,
  detail:detail
}

function insert(req,res,next){
    var items = new Inventories({
      id:req.body.id,
      name:req.body.name,
      price:req.body.price,
      url:req.body.url
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Inventories.findOne({
    _id:req.params.id
  },(err,items) => {
      items.id = req.body.id
      items.name = req.body.name
      items.price = req.body.price
      items.url = req.body.url

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Inventories.findOne({
    _id:req.params.id
  },(err,items) => {
      if(err)throw err

      items.remove((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function display(req,res,next){
    Inventories.find({},(err,result) => {
          res.json(result)
    })
}

function detail(req,res,next){
    Inventories.findOne({
      _id:req.params.id
    },(err,result) => {
          res.json(result)
    })
}
