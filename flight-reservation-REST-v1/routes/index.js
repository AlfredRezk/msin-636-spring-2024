const router = require('express').Router()


// EndPoint : /api/users
router.use('/users', require('./user'))
// EndPoint : /api/auth
// router.use('/auth', require('./auth'))
// EndPoint : /api/passengers
router.use('/passengers', require('./passenger'))



module.exports = router;