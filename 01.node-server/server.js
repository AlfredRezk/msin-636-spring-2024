const http = require('http')

const PORT = 5000


const server = http.createServer((req, res)=>{
    // console.log(req.url)
    // console.log(req.method)
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain')
    // res.setHeader('X-author', 'Alfred Rezk')

    // res.writeHead(200, {'Content-Type': 'text/html', 'X-author':'Alfred Rezk'})
    // res.write('<h1>Hello Node.js</h1>')
    // res.write('<p>This is a paragraph</p>')
    // res.end('<p> This end the request </>')
    // res.write('Hello world');
    // res.end()



    const url = req.url; 
    res.setHeader('Content-Type', 'text/html')
    if(url==='/' && req.method==='GET'){
        res.write('Home');
    }else if(url==='/about' && req.method ==='GET'){
        res.write('About');
   
    }else if(url==='/projects' && req.method==='GET'){
        res.write('Projects');
 
    }else{
        res.write('<h1> Page not Found</h1>')
    }
    res.end();

})

server.listen(PORT, console.log(`Server running on port ${PORT}`));

