

// dessa forma eu não consigo chamar o valor de i no momento que ele estava precisaria usar o let ao inves de var
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()