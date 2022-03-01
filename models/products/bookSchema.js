const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

  name:         { type: String, required: true, unique: true },
  author:       { type: String, required: true },
  desc:         { type: String, required: true },
  image:     { type: String, required: true },
  price:        { type: Number, required: true },
  quantity:     { type: Number, required: true }
 
}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema)