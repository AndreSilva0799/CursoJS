const escola = "Cod3r"

console.log(escola.charAt(4)) // retornando caracter na quarta posição
console.log(escola.charCodeAt(3)) // valor relacionado a tabela unicode
console.log(escola.indexOf('C')) // se eu tiver esse caracter na palavra escola ele retorna a posição do caracter

console.log(escola.substring(1)) // imprime da posição 1 pra frente
console.log(escola.substring(0,3)) // imprime da posição 0 até o indice 3, mas não imprime o indice 3

console.log('Escola: '.concat(escola).concat("!")) // concatena 
console.log(escola.replace(3,'e')) //subistituindo o 3 por e
console.log(escola.replace(/\w/g,'e')) //subistituindo tudo da variavel escola por e (regex)

console.log('Ana,Maria,Pedro'.split(',')) //separando por vingula e gerando um array