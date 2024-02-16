let nota1 = 8
let nota2 = 10
let nota3 = 2

function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Você Passou ' + nota);
    } else {
        console.log( 'reprovado')
    }
}

soBoaNoticia(nota1)
soBoaNoticia(nota2)
soBoaNoticia(nota3)


function seForVerdadeEuFalo(valor){
if (valor){ // quer dizer se 'valor' for verdadeiro, então só executa o bloco abaixo se o valor for verdadeiro 
    console.log('É verdade... ' + valor)
}
}

seForVerdadeEuFalo()
seForVerdadeEuFalo((null))
seForVerdadeEuFalo((undefined))
seForVerdadeEuFalo((NaN))
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) //daqui pra baixo será executado, pois o valor é verdadeiro
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})