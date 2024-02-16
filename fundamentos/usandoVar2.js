// Exemplo de var dentro de fora do bloco, veja que a variavel é apenas subescrita, por que var é como se fosse globas, só deixa de ser globar dentro de uma function

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)

}

console.log('fora = ', numero)