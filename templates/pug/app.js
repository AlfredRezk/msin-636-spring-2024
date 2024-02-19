require('dotenv').config({path:'./app.env'})
require('colors');
const express = require('express');
const path = require('path');
const app = express();

// Enviroment variables
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE ||'production';

// Template configuration
app.set('view engine', 'pug')
app.set('views', 'views')


const products = [
    {id:'1', title:'LCD TV', description: 'Big TV', price: 450.99},
    {id:'2', title:'Radio', description: 'Load radio', price: 65.79},
    {id:'3', title:'Keyboard', description: 'LED Keyboard', price: 15.55},

]
app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'view/products.html'))

    // res.render('products', {title: 'Hello Pug', show:false})
    res.render('products', {products, docTitle: 'My Page'})
})








app.listen(PORT, console.log(`Server running on port ${PORT} on ${MODE} mode`.green.underline))