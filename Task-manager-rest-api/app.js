require('colors');
require('dotenv').config()
require('express-async-errors')
const express = require('express');
const app = express();

const connectDB= require('./db.js')

// load configurations
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const MODE = process.env.MODE || 'production'

// connect to DB
connectDB()

// Midllewars
app.use(express.json())
app.use(require('morgan')('dev'))
// Add router
app.use('/api/tasks', require('./routes/task.js'))

// Express error handler
app.use((error, req, res, next)=>{
    console.log(`Error: ${error.message}`.red)
    res.status(500).json({
        success: false,
        error: error.message
    })
}) 




const server = app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`.green.underline))