
// assim eu ja consigo pegar o valor de i no momento que estava certinho, se eu trocar let por var o resultado vai ser sempre 10
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()