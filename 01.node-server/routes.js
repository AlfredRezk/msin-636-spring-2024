const fs = require('fs/promises');
const routes = async(req, res)=>{
    const url = req.url;
    const method = req.method

    if(url==='/' && method==='GET'){
        res.setHeader('Content-Type', 'text/html')
        const html = await fs.readFile('index.html', 'utf-8')
        res.write(html)
        return res.end()
    }

    if(url==='/notes'&& method==='POST'){

        let body = '';
        req.on('data', (chunk)=>{body+=chunk })

        req.on('end', async()=>{
            const [key, value] = body.split('=')
            await fs.writeFile('notes.txt', value)
        })
  
        // Redirect 
        res.statusCode = 304;
        res.setHeader('Location', '/')
        return res.end()
    }

    res.write('<h1> Page Not Found </h1>')
    res.end();
}

module.exports = routes;