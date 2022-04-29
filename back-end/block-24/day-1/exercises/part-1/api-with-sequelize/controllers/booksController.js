const express = require('express');
const router = express.Router();
const Book = require('../models')

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll;
    return res.status(200).json('teste')
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

module.exports = router;