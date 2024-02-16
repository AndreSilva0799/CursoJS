let valor 
console.log(valor) //aqui aparece undefined, por que eu não atribui nada para a variavel 
valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco) //Tambem vai retornar undefined pois eu não atribui preco no objeto produto
console.log(produto) // aqui imprime o {} vazio
produto,preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)