function Pessoa(){
    this.idade = 0
        const self = this  // assim eu não preciso usar o .blind(this) apenas trocar a palavra this pela const self
        setInterval(function(){
            self.idade ++
            console.log(self.idade)
        }/* .bind(this) */, 1000)
}

// acima estou usando o bind e passando this como parametro por que precisamos amarrar o set interval na function pessoa
// caso eu tire o bind vai ficar vindo no console NaN, por que não reconhece o object pessoa

new Pessoa 