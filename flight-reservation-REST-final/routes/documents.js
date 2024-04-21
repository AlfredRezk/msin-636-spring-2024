const router = require('express').Router();


router.all('/', (req, res)=>{
    res.json({
        swagger:'/api/documents/swagger',
        redoc: '/api/documents/redoc',
        json: '/api/documents/json'
    })
})

router.all('/json', (req, res)=>{
    res.sendFile('/config/swagger.json', {root:'.'})
})

// Swagger
const swaggerUi = require('swagger-ui-express');
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(require('../config/swagger.json')))

// redoc
const redoc = require('redoc-express')
router.get('/redoc', redoc({specUrl:'/api/documents/json', title:'API Docs'}))


module.exports = router;