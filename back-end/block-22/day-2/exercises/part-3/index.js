const fs = require('fs').promises;


async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  await Promise.all([
    fs.writeFile('file1.txt', strings[0]),
    fs.writeFile('file2.txt', strings[1]),
    fs.writeFile('file3.txt', strings[2]),
    fs.writeFile('file4.txt', strings[3]),
    fs.writeFile('file5.txt', strings[4]),
  ]);
  
  const fileContents = await Promise.all([
    fs.readFile('file1.txt'),
    fs.readFile('file2.txt'),
    fs.readFile('file3.txt'),
    fs.readFile('file4.txt'),
    fs.readFile('file5.txt'),
  ]);

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}


arrayToFile();