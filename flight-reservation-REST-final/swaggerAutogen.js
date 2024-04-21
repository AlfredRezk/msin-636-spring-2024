require('dotenv').config({path:'./config/app.env'})
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

const swaggerAutogen = require('swagger-autogen')();


const document = {
    info:{
        version:'1',
        title:'Flight Reservation API'
    },
    host:`${HOST}:${PORT}`,
    basePath:'/',
    security:[{"JWT":true}]
}

const routes = ['./index.js']
const outFile = './config/swagger.json'

swaggerAutogen(outFile, routes, document)