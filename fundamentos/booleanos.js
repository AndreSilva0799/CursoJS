let isAtivo = false

console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //PARA FAZER IMPRIMIR VERDADEIRO EU NEGO DUAS VEZES 

isAtivo = 1
console.log(!isAtivo) // SE EU NEGAR APENAS UMA VEZ ACONTECE ISSO VEJA QUE ISaTIVO = 1 (TRUE) SE EU NEGUEI UMA VEZ ELE ME RETORNA FALSE

console.log('OS VERDADEIROS ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo= true))

console.log('os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 ||' '))

let nome = 'Lucas'
/*nesse caso se o nome não estiver preenchido vai imprimir desconhecido */
console.log(nome||'Desconhecido')