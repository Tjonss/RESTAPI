const Book = require('./bookSchema');


exports.createBook = (req, res) => {

  Book.exists({ name: req.body.name }, (err, result) => {

    if(err){
      return res.status(500).json(err)
    }

    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'A book by that name already exists, please update book instead.'
      })
    }

    // const newBook = new Book({

    // })
    // newBook.save()
    
    Book.create({
      name:       req.body.name,    
      author:     req.body.author,
      desc:       req.body.desc,
      image:      req.body.image,
      price:      req.body.price,
      quantity:   req.body.quantity 
    })
    .then(data => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Book was created.',
        data
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create book.',
        err
      })
    })
  })
} 