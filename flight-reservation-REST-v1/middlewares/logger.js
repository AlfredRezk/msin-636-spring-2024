const morgan = require('morgan');
const fs = require('fs');

const [data, time]  = new Date().toISOString().split('T')
module.exports = morgan('combined', {
    stream: fs.createWriteStream(`./logs/${data}.log`, {flags:'a+'})
})
