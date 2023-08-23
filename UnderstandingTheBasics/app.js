const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hi I am Node JS Baba</h1>');
    res.end();
});

server.listen(3000);
