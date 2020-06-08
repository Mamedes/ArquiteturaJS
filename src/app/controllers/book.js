const Book = require('../models/Book');
const db = require('../../config/db');

module.exports = {
  index(req, res) {
    Book.all(function (book) {
      // return res.send(book);
      return res.render('book/index', { book });
    });
  },
  create(req, res) {
    Book.all(function (book) {
      return res.render('book/create');
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('please, fill all fill');
      }
    }
    s;
    Book.create(req.body, function (book) {
      return res.redirect(`/book/${book.id}`);
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('please, fill all fill');
      }
    }
    Book.update(req.body, function () {
      return res.redirect(`/book/${req.body.id}`);
    });
  },
  show(req, res) {
    Book.find(req.params.id, function (book) {
      if (!book) return res.send('Book not Found');

      return res.render('book/show', { book });
    });
  },
  edit(req, res) {
    Book.find(req.params.id, function (book) {
      if (!book) return res.send('Book not Found');

      return res.render('book/edit', { book });
    });
  },
};
