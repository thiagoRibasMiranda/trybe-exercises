const fs = require('fs').promises;
const readline =  require('readline');

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

 async function replaceWordChosenFile() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  let contentFile = "";
  try {
    contentFile = await fs.readFile(fileName, 'utf-8');
  } catch (error) {
    console.log('Arquivo inexistente')
  }
  if(!contentFile) return;
  console.log(contentFile);

  const word = await question('Digite a palavra a ser substituida: ');
  const replaceWord = await question('E qual palavra deve ficar em seu lugar? ');
  const newContent = contentFile.replace(new RegExp(word, 'g'), replaceWord);
  await fs.writeFile(fileName, newContent);
}

replaceWordChosenFile();