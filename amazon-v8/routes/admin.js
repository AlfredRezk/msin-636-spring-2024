const router = require('express').Router()
const adminCtrl = require('../controllers/admin')
const {authorize, isAuth} = require('../middleware/isAuth');
const upload = require('../middleware/upload');
const {addProduct} = require('../validation/admin')

router.use(isAuth);
router.use(authorize('admin'))

router.get('/add-product', adminCtrl.getAddProduct)
router.post('/add-product', upload.single('image'), addProduct(),  adminCtrl.postAddProduct)
router.get('/products',  adminCtrl.getProducts)
router.post('/delete-product', adminCtrl.postDeleteProduct)
router.get('/edit-product/:prodId', adminCtrl.getEditProduct)
router.post('/edit-product', upload.single('image'), adminCtrl.postEditProduct)
module.exports = router;