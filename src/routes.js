const express = require('express');
const routes = express.Router();
const book = require('./app/controllers/book');

routes.get('/', function (req, res) {
  return res.redirect('/book');
});

routes.get('/book', book.index);
routes.get('/book/create', book.create);
routes.get('/book/:id', book.show);
routes.put('/book', book.put);
routes.get('/book/:id/edit', book.edit);
// Recebe os dados do formulario
routes.post('/book', book.post);
// routes.delete('/book', book.delete);

module.exports = routes;
