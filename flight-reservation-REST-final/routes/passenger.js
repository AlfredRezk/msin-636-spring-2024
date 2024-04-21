const router = require('express').Router();
const passengerCtrl = require('../controllers/passenger');
const {isStaffOrAdmin} = require('../middlewares/auth')


router.use(isStaffOrAdmin)


router
.route('/')
.get(passengerCtrl.list)
.post(passengerCtrl.create)

router.route('/:id')
.get(passengerCtrl.read)
.put(passengerCtrl.update)
.patch(passengerCtrl.update)
.delete(passengerCtrl.delete)

module.exports = router;