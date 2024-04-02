require('colors');
require('dotenv').config()
require('express-async-errors');
const express = require('express');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash');
const {engine} = require('express-handlebars')
const app = express();
const connectDB = require('./db')
const porductsRoutes = require('./routes/product')
const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart')
const errorHandler = require('./middleware/errorHandler');
const locals  = require('./middleware/locals')

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


// Session store
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection:'sessions'
})

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use('/images', express.static('public/uploads'));

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:store
}))
app.use(flash())

// Use locals variable
app.use(locals)
// Connect to Database
connectDB()

// Routes
app.use('/', porductsRoutes)
app.use('/', authRoutes);
app.use('/cart', cartRoutes)
app.use('/admin', adminRoutes)
// Express Error Handler
app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server: http://${HOST}:${PORT} on ${MODE} mode`.blue))
