const router = require('express').Router()
const adminCtrl = require('../controllers/admin')
const isAuth = require('../middleware/isAuth')

router.use(isAuth);

router.get('/add-product', adminCtrl.getAddProduct)
router.post('/add-product', adminCtrl.postAddProduct)
router.get('/products', adminCtrl.getProducts)
router.post('/delete-product', adminCtrl.postDeleteProduct)
router.get('/edit-product/:prodId', adminCtrl.getEditProduct)
router.post('/edit-product', adminCtrl.postEditProduct)
module.exports = router;