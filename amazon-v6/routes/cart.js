const router = require('express').Router()
const cartCtrl = require('../controllers/cart');

router.post('/add', cartCtrl.postAddCart)
router.get('/', cartCtrl.getCart)
router.get('/dec/:prodId', cartCtrl.decCart)
router.get('/inc/:prodId', cartCtrl.incCart)
router.post('/delete/', cartCtrl.removeCart)


module.exports = router;