const connection = require('./connection');

const getByAuthorId = async (id) => {
  const [result] = await connection.execute('SELECT id, title, author_id FROM books');
  const filteredBooks = result.filter((a) => Number(a.author_id) === Number(id));

  return filteredBooks;
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, title, author_id FROM books');

  return result;
}

module.exports = {
  getAll,
  getByAuthorId,
}