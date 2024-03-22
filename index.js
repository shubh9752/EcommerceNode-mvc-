import express from 'express'

import ejsLayouts from 'express-ejs-layouts'
import ProductController from './src/controller/productController.js';
import path from 'path'
// const express = require('express');

const app = express();

// create an instance of ProductController
const productController = new ProductController(); 


app.get('/', (productController.getProducts));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory (optional, if your views are in a different directory)
app.set('views', path.join(path.resolve(),'src', 'views'));
// app.set('layout', 'layouts/layout');
app.use(ejsLayouts);

app.use(express.static('src/views'));
    // return res.send('Welcome to Inventory App');
app.listen(8080);
console.log('Server is listening on pert 3400');