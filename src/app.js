

// 1. Imports

const express = require('express')
const app = express()

require('dotenv/config')

const path = require('path')

const connectDB = require("./db")



// 2. Middlewares

// Static files - HTML CSS JS IMAGES
app.use(express.static(path.join(__dirname, 'public')))

// View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// To use req.body
app.use(express.urlencoded({ extended: true }))


connectDB()


// 3. Routes

// Home
app.use('/', require('./routes'))

// Auth
app.use('/auth', require('./routes/auth.router'))


// 4. Export

module.exports = app
