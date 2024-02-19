function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
} 

console.log(area(2,2))

console.log(area(2)) //Nan

console.log(area()) //Nan

console.log(area(2,3,2,2,2,2,2)) /// pega os dois primeiros parametros e ignora os demais 

console.log(area(5,5))

area(5,5)