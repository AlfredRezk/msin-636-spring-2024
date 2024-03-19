require('colors');
require('dotenv').config()
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
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:store
}))
app.use(flash())


// Use locals variable
app.use((req, res, next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.errorMessage = req.flash('error');
    res.locals.successMessage = req.flash('success');
    next();
})


// Connect to Database
connectDB()

// Routes
app.use('/', porductsRoutes)
app.use('/', authRoutes);
app.use('/cart', cartRoutes)
app.use('/admin', adminRoutes)


const server = app.listen(PORT, console.log(`Server: http://${HOST}:${PORT} on ${MODE} mode`.blue))
// process.on('unhandledRejection', ()=>{
//     console.log(`Server will shutdown`.red)
//     server.close();
// })