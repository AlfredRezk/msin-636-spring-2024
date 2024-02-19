require('dotenv').config({path:'./app.env'})
require('colors');
const express = require('express');
const path = require('path');
const app = express();
const {engine} = require('express-handlebars')

// Enviroment variables
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE ||'production';

// Template configuration
app.engine('hbs', engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', 'views')

const products = [
    {id:'1', title:'LCD TV', description: 'Big TV', price: 450.99},
    {id:'2', title:'Radio', description: 'Load radio', price: 65.79},
    {id:'3', title:'Keyboard', description: 'LED Keyboard', price: 15.55},

]
app.get('/', (req, res)=>{
    res.render('products', {title: 'Hello handlebars', docTitle: 'My Page', products, loggedIn:false })
})








app.listen(PORT, console.log(`Server running on port ${PORT} on ${MODE} mode`.green.underline))