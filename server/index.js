const express = require('express')
const app = express()
const PORT = 4000
const controller = require('./getProducts')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

// const products = require('../products.json')

app.get('/api/products', controller.getProducts)

app.get('/api/products/:id', controller.getProduct)

