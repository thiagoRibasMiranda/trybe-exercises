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

doMatch(5, 5, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))