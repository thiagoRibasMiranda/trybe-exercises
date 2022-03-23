function doMatch(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a != "number" || typeof b != "number" || typeof c != "number") {
      reject(new Error("Informe apenas números"));
    }
    const result = ((a + b) *c);

    if(result < 50) {
      reject(new Error("Valor muito baixo"));
    }
    resolve(result);
  })
  return promise;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

 async function callDoMatch() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await doMatch(...randomNumbers);
    console.log(result);
  } catch(error) {
   console.log(error);
  }

}
