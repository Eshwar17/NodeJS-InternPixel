const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Home Page</h1><form action="/message" method="POST"><input type="text"><button type="submit">Submit</button></form>');
        return res.end();
    }
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hi I am Node JS Baba</h1>');
    res.end();
});

server.listen(3000);
