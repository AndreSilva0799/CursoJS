console.log('01)','1' == 1) // esse é true por que os nuemros são iguais
console.log('02)','1' === 1) // esse é false por que o '1' é uma string e com 3 iguais compara até o tipo  
console.log('03)','3' != 3) // aqui é false os dois 3 são iguais, por que ele só está comparando o numero e não tipo
console.log('04)','3' !== 3) // agora sim é true por que é diferente, por que está comparando o tipo tbm, repare que os dois numeros são iguais mais são de tipo diferente

console.log('05)', 3 < 2) // 3 menor que dois = false
console.log('06)', 3 > 2) // 3 maior que dois = true
console.log('07)', 3 <= 2) // 3 é menor ou igual a 2 ? não, é maior então é false 
console.log('08)', 3 >= 2) // 3 é maior ou igual a 2 ? sim é maior então é true 

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// melhor usar os === por que compara até o tipos, evita dar dor de cabeça..