const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server is running on '+ serverURI));


if(!mongoURI) 
  console.log('No connection string found.')
else
  mongoose.connect(mongoURI, () => console.log('Connected to DB'))