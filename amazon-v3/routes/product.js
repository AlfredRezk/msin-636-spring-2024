const router = require('express').Router()
const prodCtrl = require('../controllers/product');

router.get('/', prodCtrl.getProducts)
router.get('/products/:prodId', prodCtrl.getProduct)


module.exports = router;