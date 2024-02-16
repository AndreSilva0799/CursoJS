let num1 = 1
let num2 = 2

num1++ // assim é menos apressado 
console.log(num1)
--num1 // assim é mais apressado para realizar a subtração
console.log(num1)

console.log(++num1 === num2--) // assim vai dar verdadeiro, por que primeiro ele compara e só depois ele decrementa, então no momento da comparação o num1 é 2 e num2 = 2
console.log(++num1 === num2) // veja que depois retorna false por que no console de cima depois da comparação decrementa