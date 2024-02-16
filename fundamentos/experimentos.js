let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando um variavel maluca: sem var e Let !

abc= 3 // não faca isso em casa !!!
console.log(globaç.abc)

// module.exports ={e: 456, f: false, g: 'teste'}