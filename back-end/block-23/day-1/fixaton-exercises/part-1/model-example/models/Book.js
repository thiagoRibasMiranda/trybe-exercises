const connection = require('./connection');
const Author = require('./Author');

const getByAuthorId = async (id) => {
  const [result] = await connection.execute('SELECT id, title, author_id FROM books');
  const filteredBooks = result.filter((a) => Number(a.author_id) === Number(id));

  return filteredBooks;
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, title, author_id FROM books');

  return result;
}

const isValid =  async (title, author_id) => {
  if (!title || title.length < 3) return false;
  if (!author_id) return false;
  const author = await Author.findById(author_id);
  if (!author) return false;

  return true;
};

const create = async (title, author_id) => {
  // const author = await Author.findById(id);
  // const id = getAll().length + 1;

  connection.execute(
    'INSERT INTO model_example.books (id, title, author_id) VALUES (?,?)',
    [title, author_id],
  );
}

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}