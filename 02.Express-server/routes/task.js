const router= require('express').Router()
const path = require('path');
const fs = require('fs/promises');

// Get request 

router.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../', 'views', 'index.html'))
})

// Post request
router.post('/', async(req, res)=>{
    await fs.writeFile('./input.txt', req.body.task+'\n' , {flag:'a+'})
    res.redirect('/');
})

module.exports = router;