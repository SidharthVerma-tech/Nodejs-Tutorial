const fs = require('fs')
const http = require('http')
const url = require('url')
// const text = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(text)

// const textOut = `This is what we know about the avacado ${text}\n ${Date.now()}`
// fs.writeFileSync('./txt/newoutput.txt', textOut)
// console.log('File written')
// fs.readFile('./txt/input.txt', 'utf-8', (err,data)=>{
//     console.log(data)
// })
// fs.readFile('./txt/start.txt', 'utf-8', (err,data)=>{
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err,data1)=>{
//         console.log(data1);
//         fs.readFile('./txt/append.txt', 'utf-8', (err,data2)=>{
//             console.log(data2);
//             fs.writeFile('./txt/newoutput3.txt',`${data2} appended \n ${data1}`, 'utf-8', (err)=>{
//                 console.log("Write the file Sucessfully");
//             })
//         })
//     })
// })
// console.log("Reading File ...")

//////////////////////////
// CREATING A WEB SERVER
const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName==='/') res.end("Hello from the server")
    else if(pathName==='/product'){
        res.end("This is the product")
    }else if(pathName==='/overview'){
        res.end("This is the overview")
    }else if(pathName==='/api'){
        
        fs.readFile('./dev-data/data.json', (err,data)=>{
            
            res.writeHead(200, {
                'Content-type' : 'application/json'
            })
            res.end(data);
        })
        
    }
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end("<h1>This page cannot be found</h1>")
    }
})
server.listen(8000, '127.0.0.1',()=>{
    console.log("Listening to the server")
})