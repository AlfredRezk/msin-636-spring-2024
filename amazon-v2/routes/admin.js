const router = require('express').Router()
const adminCtrl = require('../controllers/admin')

router.get('/add-product', adminCtrl.getAddProduct)
router.post('/add-product', adminCtrl.postAddProduct)
module.exports = router;