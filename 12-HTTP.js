//Adding http module
const http = require('http');

//Creating our server
// Client requiering from the web server
// The resposne is the page
const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){    
        // Response
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you're looking for </p>
    <a href="/">back homre</a>`)
})

//Our server port
//localhost:5000 
server.listen(5000);