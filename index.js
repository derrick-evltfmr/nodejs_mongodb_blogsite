const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})


// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})


// Post Page
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})


// Contact Page
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})



app.listen(4000, ()=>{
    console.log("APP running on port 4000")
})