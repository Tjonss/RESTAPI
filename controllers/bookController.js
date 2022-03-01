const router = require('express').Router();
const bookModel = require('../models/products/bookModel')

// Hämtar alla böcker från databasen
router.get('/', (req, res) => {
  
})

// Hämtar endast 1 bok
router.get('/:id', (req, res) => {
  
})

// Lägger till en ny bok
router.post('/', bookModel.createBook);

// Uppdaterar hela bok
router.put('/:id', (req, res) => {

})

// Uppdaterar en del av en bok
router.patch('/', (req, res) => {

})

// Tar bort en bok
router.delete('/:id', (req, res) => {

})



module.exports = router;