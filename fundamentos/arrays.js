const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3]) //pra mostrar no console o valor da posição 0 e 3
console.log(valores[4]) // para mostrar o valor da posição 4 do array, como não tem imprime indefinido
valores[4] = 10 //assim eu consigo adicionar no vetor o valor 10 na posição 4
console.log(valores)
console.log(valores.length) // para mostrar o tamanho do array 

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) // retira do array e mostra na tela o valor da ultima posição do array
console.log(valores)
delete valores[0] //excluin o item da posição 0
console.log(valores)
console.log(typeof valores) // o array é do tipo object