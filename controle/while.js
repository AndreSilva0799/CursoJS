function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() /* gera um numero aleatorio*/ * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`opcao escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')