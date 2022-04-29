const express = require('express');
const router = express.Router();
const { Book }= require('../models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    return res.status(200).json(book)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updateBook); // confira o que é retornado quando o book com o id é ou não encontrado;

    if(!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook); // confira o que é retornado quando o book com o id é ou não encontrado;
    
    return res.status(200).json({ message: 'Livro deletado com sucesso!' })
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;