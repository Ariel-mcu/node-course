// http 是 NodeJS 內建的模組
const http = require('http');

const server = http.createServer((request, response) => {
    // 當你的 server 接收到 request 的時候要做什麼事
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charest=UTF-8');
    response.end('hello server');

});

server.listen(3001, () => {
    console.log('Server running at port 3001')
});