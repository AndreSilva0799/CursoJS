// novo recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // pegando do objeto apenas nome e idade e imprimindo no console
console.log(nome, idade)

const { nome:n, idade:i} = pessoa // caso eu queria mudar o nome da variavel dentro do objeto é assim que faz
console.log(n, i)

const {sobrenome,bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// atributos dentro de objeto que tbm estão dentro de outro objeto

const {endereco: {logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)