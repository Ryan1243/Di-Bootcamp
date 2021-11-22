const http = require('http');
const server = http.createServer((req,res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> This is my first response </h1>');
    res.write('<h1> This is My second response </h1>');
    res.write('<p> This is my third response </p>');
    res.end();
    
})
server.listen(3000);