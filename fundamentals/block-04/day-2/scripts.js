let vetor = []

for (let index = 0; index < 25; index += 1) {
    vetor.push(index + 1);
}

console.log(vetor);

for (let index =0; index < vetor.length; index += 1) {
    console.log (vetor[index] / 2);
}