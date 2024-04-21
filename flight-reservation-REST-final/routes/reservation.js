const router = require('express').Router();
const resCtrl = require('../controllers/reservation');


const {isStaffOrAdmin} = require('../middlewares/auth');
router.use(isStaffOrAdmin)

router
.route('/')
.get(resCtrl.list)
.post(resCtrl.create)

router.route('/:id')
.get(resCtrl.read)
.put(resCtrl.update)
.patch(resCtrl.update)
.delete(resCtrl.delete)


// List all passengers 
router.get('/:id/passengers', resCtrl.passengers)
module.exports = router;