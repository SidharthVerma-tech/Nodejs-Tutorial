// Reading or writing File
const fs = require('fs');
const http = require('http');
const url = require('url');
fs.readFile('text.txt', 'utf-8', ()=>{
    fs.writeFile('new.txt','Hello this is Sidharth learning node','utf-8', ()=>{
        fs.readFile('new.txt', 'utf-8', (err,data)=>{
            console.log(data)
        })
    }) 
})
// BUILDING OUR OWN SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName==='/') res.end('This is overview')
    else if (pathName === '/api') {
        fs.readFile('./data.json', (err, data) => {

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not Found');
    }
});

server.listen(8000, 'localhost', () => {
    console.log("Listening to the server on http://localhost:8000");
});
