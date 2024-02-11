require('colors');
const express = require('express');
const app = express();
const taskRoutes = require('./routes/task')
const PORT = 5000;

// Build-in middleware in express 
app.use(express.urlencoded({ extended: false })) // req.body
app.use('/style', express.static('public/css'))
app.use('/images', express.static('public/images'))

app.use('/', taskRoutes)

app.use((req, res) => {
    res.status(404).send('<p>Page Not Found</p>')
})

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.underline))