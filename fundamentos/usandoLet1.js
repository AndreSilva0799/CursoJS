var numero = 1   // assim o var que esta "global" sera imprimido = 1 e o let que está dentro do bloco sera imprimido 2
// se encima fosse let numero tbm obedeceria da mesma forma.
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)