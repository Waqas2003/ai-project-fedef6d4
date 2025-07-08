const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRouter = require('./routes/product');
app.use('/api/products', productRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});