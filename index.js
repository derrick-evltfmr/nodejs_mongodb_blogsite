const express = require('express')
const expressEdge = require('express-edge')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.use(expressEdge.engine)

//app.set('views',`${__dirname}/views`)
app.set('views', path.join(__dirname, 'views'))

// Home Page
var homePage = function(req,res) {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
}

/* homePage is a var which stores the function but not the function itself, so it's not homePage() */
app.get('/', homePage)     
app.get('/home', homePage)


// About Page
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})


// Post Page
app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})


// Contact Page
app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})



app.listen(4000, ()=>{
    console.log("APP running on port 4000")
})