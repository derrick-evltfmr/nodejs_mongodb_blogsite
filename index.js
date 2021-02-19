const http = require('http')
const fs = require('fs')

// synchronous means blocking code
// so that we can make sure that the pages are read before
// the server respond
const aboutPage = fs.readFileSync('about.html') 
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request, response)=>{
    if (request.url === '/about'){
        response.end(aboutPage)
    }
    else if (request.url === '/contact') {
        response.end(contactPage)
    }
    else if (request.url === '/'){
        response.end(homePage)
    }
    else {
        response.writeHead(404)
        response.end("PAGE NOT FOUND")
    }
    
})

server.listen(3000)