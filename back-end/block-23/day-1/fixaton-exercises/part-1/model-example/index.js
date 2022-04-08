const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async(req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async(req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async(req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  res.status(200).json(books);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});