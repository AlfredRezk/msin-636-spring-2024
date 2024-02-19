require('dotenv').config();
require('colors');
const express = require('express')
const app = express();
const {engine} = require('express-handlebars') 

// Enviroment variabls 
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || 'production';

// Configure Handlebars 
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
// app.set('views', 'views')

// Middlewares
app.use(express.static('public'))



app.get('/', (req, res)=>{
    res.render('pages/products')
})


app.listen(PORT, console.log(`Server running,  http://localhost:${PORT} on ${MODE} mode`.green.underline))

