const router = require('express').Router()
const cartCtrl = require('../controllers/cart');

router.post('/add', cartCtrl.postAddCart)
router.get('/', cartCtrl.getCart)


module.exports = router;