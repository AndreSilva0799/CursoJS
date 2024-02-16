// funcao sem retorno

function imprimirSoma(a, b){
console.log(a + b)
}
imprimirSoma(2,3) // chamando função


//função com retorno

function soma(a,b = 1){
    return a + b
}
console.log(soma(2,3)) //funcao com retorno deve ser chamadas dentro do console 
console.log(soma(2))