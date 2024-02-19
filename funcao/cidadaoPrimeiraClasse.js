// função e JS é First-Class Object (Citizens)
// Higher-order function 

// criar de forma literal

function fun1(){

}

// Armazenar a função em uma variavel, assim eu chamando apenas a variavel eu ja consigo invocar a function

const fun2 = function(){
console.log('André')
}

fun2() // chamando a função conforme mencionei no comentario acima

// Armazenar função dentro de um Array, nesse exemplo tambem estou declarando a funcção dentro do array

const array = [function(a,b){
    return a + b
},fun1,fun2]

// chamando a função acima 
console.log(array[0](2,3))


// Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//aqui apenas um teste kk
const obj1 = {}
obj1.teste =  'Opa'
console.log(obj1.teste)

// Passar função como parametro
function run(fun){
    fun()
}
//posso declarar a função direto no parametro da chamada da run()
run(function () {console.log('Executando...')})

// Uma função pode retornar/conter um função

function soma (a,b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) // chamando diretamente 
const cincoMais = soma(2,3) // armazenando a função soma em uma variavel e depois passando o parametro solo   
cincoMais(4)