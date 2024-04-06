const router = require('express').Router()
const authCtrl = require('../controllers/auth');
const { login, signup } = require('../validation/auth');

router.get('/login', authCtrl.getLogin);
router.get('/signup', authCtrl.getSignup);
router.post('/login',login(),  authCtrl.postLogin);
router.post('/signup', signup(),  authCtrl.postSignup);
router.get('/logout', authCtrl.getLogout);
// Advanced Authentication
router.get('/forgetpassword', authCtrl.getForgetPassword)
router.post('/forgetpassword', authCtrl.postForgetPassword)
router.get('/resetpassword/:resetToken', authCtrl.getResetPassword)
router.post('/resetpassword', authCtrl.postResetPasword)


module.exports = router