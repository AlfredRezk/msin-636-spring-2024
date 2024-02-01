const fs = require('fs/promises');

const readFile = async(path) =>{
    const data = await fs.readFile('./modules/input.txt','utf-8')
    console.log(data);
}

readFile('/modules/input.txt');