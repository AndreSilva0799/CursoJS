function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() /* gera um numero aleatorio*/ * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao escolhida foi ${opcao}.`)
}while(opcao != -1) 

console.log('Até a proxima!')