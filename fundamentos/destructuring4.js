function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // estou usando isso para que se o min for maior que max o min passa a ser o max.
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // passando apenas um valor o max será o 1000 conforme definido na function
console.log(rand([,10])) // passando só o valor de max irá trazer de 0 até o valor definido
console.log(rand([])) // se eu passar o array vazio vai ficar retornando os valores padrao de min = 0 e max = 1000
console.log(rand()) // assim não pode  