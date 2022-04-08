const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

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
  if(!books) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  console.log(title);
  if (!Book.isValid(title, author_id)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});