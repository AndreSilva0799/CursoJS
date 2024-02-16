const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // aqui para ver se a variavel peso 1 é inteiro
console.log(Number.isInteger(peso2)); // já esse por que eu coloquei 2.1 acaba ficando false pois é um flutuante.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)
console.log(media)

console.log(media.toFixed(2)) // aqui estou falando que quero apenas duas casa decimais

console.log(media.toString(2)) // aqui estou transformando oa variavel media em binario

console.log(typeof media) // para ver o tipo da variavel