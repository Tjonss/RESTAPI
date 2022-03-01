const express = require('express');
const app = express();
const cors = require('cors');

const productController = require('./controllers/bookController')

// MIDDLEWARE

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())



// CONTROLLERS SOM STYR VART VI SKA GÅ


app.use('/api/books', productController)


module.exports = app;