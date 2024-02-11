require('colors')
const express= require('express');
const app  = express()
const PORT = 5000;


app.use((req, res, next)=>{
        console.log(req.url.blue);
        next();
})

app.get('/', (req, res)=>{
    res.send('<h1> Home Page</h1>')
})
app.get('/about', (req, res)=>{
    res.send('<h1> About Page</h1>')
})

app.get('/contact', (req, res)=>{
    res.send('<h1> Contact Page</h1>')
})



app.get('*', (req, res)=>{
    res.send('<h1>Page not found </h1>')
})

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.underline))