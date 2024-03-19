const router = require('express').Router()
const authCtrl = require('../controllers/auth')

router.get('/login', authCtrl.getLogin);
router.get('/signup', authCtrl.getSignup);
router.post('/login', authCtrl.postLogin);
router.post('/signup', authCtrl.postSignup);
router.get('/logout', authCtrl.getLogout);


module.exports = router