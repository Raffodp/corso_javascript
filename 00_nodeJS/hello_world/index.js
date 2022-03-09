const fs = require('fs')
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    fs.readFile(__dirname + '/list.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.end(data)
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});