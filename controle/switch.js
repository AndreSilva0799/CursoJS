const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) // arredondando para baixo 
    {
        case 10: //assim será se nota for 10 ou 9 
        case 9:
            console.log('Quadro de Honra')
            break //para parar o case e pular fora do bloco, caso não tenha o BREAK será executado todos os case
        case 8: case 7: //assim será se nota for 8 ou 7 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
            default: // esse é como se fosse o else, senão for nenhum das opçoes será (nota invalida)
                console.log('nota inválida')
}
}

imprimirResultado(10)
/*imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)*/