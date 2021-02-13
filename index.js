const http = require('http')

const server = http.createServer((request, response)=>{
    if (request.url === '/about'){
        response.end("THE ABOUT PAGE")
    }
    else if (request.url === '/contact') {
        response.end("THE CONTACT PAGE")
    }
    else if (request.url === '/'){
        response.end("THE HOME PAGE")
    }
    else {
        response.writeHead(404)
        response.end("PAGE NOT FOUND")
    }
    
})

server.listen(3000)