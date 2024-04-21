const router = require('express').Router()
const {auth} = require('../middlewares/auth')


// EndPoint : /api/auth
router.use('/auth', require('./auth'))

// EndPoint : /api/documents
router.use('/documents', require('./documents'))
// Check for authentication
router.use(auth)
// EndPoint : /api/users
router.use('/users', require('./user'))
// EndPoint : /api/passengers
router.use('/passengers', require('./passenger'))
// EndPoint : /api/flights
router.use('/flights', require('./flight'))
// EndPoint : /api/reservations
router.use('/reservations', require('./reservation'))




module.exports = router;