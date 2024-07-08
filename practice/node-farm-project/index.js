const http = require('http')
const url = require('url')
const fs = require('fs')
const productOverview = fs.readFileSync('./templates/product-overview.html', 'utf-8')
//const product = fs.readFileSync('./templates/product.html', 'utf-8')
const productCard = fs.readFileSync('./templates/product-card.html', 'utf-8')
const data = fs.readFileSync('./dev-data/data.json', 'utf-8')
const prodObj = JSON.parse(data);
const replaceProd = (template, product) => {
    let output = template.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DETAIL%}/g, product.detail)
    if(!output.organic){
        output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    }
    return output;
}
const server = http.createServer((req,res)=>{
    const pathName = req.url;
    //Overview Page
    if(pathName==='/overview' || pathName==='/'){
        res.writeHead(200,{
            'Content-type' : 'text/html'
        })
        const cardsHtml = prodObj.map((el)=> replaceProd(productCard, el));
        console.log(cardsHtml)
        const output = productOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output)

    }
    //Product Page
    else if(pathName==='/product'){
        res.end('This is the product')
    }
    //API Page
    else if(pathName==='/api'){
        res.writeHead(200,{
            'Content-type' : 'application/json'
        });
        res.end(data);
    }else{
       res.writeHead(404,{
            'Content-type' : 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
})
server.listen('8000', '127.0.0.1', ()=>{
    console.log("Listening to the server");
})