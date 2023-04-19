
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/home', (req, res) => {
  res.render('home')
})


app.get('/contact', (req, res) => {
    res.render('contact')
})
app.post('/contact', (req, res) => {
    console.log(req.body);
    res.end()
 }) 

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.end()
}) 

app.get('/register', (req, res) => {
    res.render('register')
}) 
app.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/home')
 }) 

app.listen(8080)
