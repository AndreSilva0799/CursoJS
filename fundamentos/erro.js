function tratarErroLancar(erro){ //serve para escrever no console uma mensagem de erro
    // throw new Error('...') outros exemplos 
    //throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome : erro.name,
        msg : erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!') // pegando no obj o atributo name e coloando em uppercase 
} catch (e) {
    tratarErroLancar(e) //captura o erro 
} finally{
    console.log('final')  // se der tudo certo no codigo o try executa e já pula para o finally, caso der erro a sequencia é try cath e fanally
}
}

const obj = {name: 'Roberto'}

imprimirNomeGritado(obj)