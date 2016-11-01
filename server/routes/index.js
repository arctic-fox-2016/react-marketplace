var express = require('express');
var router = express.Router();

const inventoriesController = require('../controllers/inventories')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Inventories API
router.post('/api/inventories', inventoriesController.insert)
router.get('/api/inventories', inventoriesController.display)
router.put('/api/inventories/:id', inventoriesController.update)
router.delete('/api/inventories/:id', inventoriesController.hapus)
router.get('/api/inventories/:id', inventoriesController.detail)

module.exports = router;
