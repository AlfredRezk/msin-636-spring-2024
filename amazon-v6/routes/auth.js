const router = require('express').Router()
const authCtrl = require('../controllers/auth')

router.get('/login', authCtrl.getLogin);
router.get('/signup', authCtrl.getSignup);
router.post('/login', authCtrl.postLogin);
router.post('/signup', authCtrl.postSignup);
router.get('/logout', authCtrl.getLogout);
// Advanced Authentication
router.get('/forgetpassword', authCtrl.getForgetPassword)
router.post('/forgetpassword', authCtrl.postForgetPassword)
// router.get('/resetpassword/:resetToken', )
// router.post('/resetpassword',)


module.exports = router