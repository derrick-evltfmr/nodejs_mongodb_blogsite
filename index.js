const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})


// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})



app.listen(4000, ()=>{
    console.log("APP running on port 4000")
})