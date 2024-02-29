require('colors');
require('dotenv').config()
const express = require('express');
const {engine} = require('express-handlebars')
const app = express();
const connectDB = require('./db')
const porductsRoutes = require('./routes/product')
const adminRoutes = require('./routes/admin')


// Configurations
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || 'production';
const HOST = process.env.HOST || '127.0.0.1';

// Configure Handlebars
app.engine('hbs', engine({
    extname:'.hbs', 
    runtimeOptions:{
        allowProtoMethodsByDefault:true,
        allowProtoPropertiesByDefault:true
    }
}))
app.set('view engine', 'hbs');

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

// Connect to Database
connectDB()

// Routes
app.use('/', porductsRoutes)
app.use('/admin', adminRoutes)


const server = app.listen(PORT, console.log(`Server: http://${HOST}:${PORT} on ${MODE} mode`.blue))
// process.on('unhandledRejection', ()=>{
//     console.log(`Server will shutdown`.red)
//     server.close();
// })