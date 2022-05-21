const http = require('http');

const server = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charest=UTF-8');
    response.end('hello server');

});

server.listen(3001, () => {
    console.log('Server running at port 3001')
});