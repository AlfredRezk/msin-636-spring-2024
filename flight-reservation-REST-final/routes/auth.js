const router = require('express').Router();
const authCtrl = require('../controllers/auth');
const {auth} = require('../middlewares/auth')

router.post('/login', authCtrl.login);
router.get('/logout', auth, authCtrl.logout)



module.exports = router;