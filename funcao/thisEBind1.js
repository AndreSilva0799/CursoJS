const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
// console.log(`André ${pessoa.saudacao}`) /*teste*/

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()