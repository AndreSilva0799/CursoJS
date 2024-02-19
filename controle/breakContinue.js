/* Aqui é normal, executa até a condição ser = 5 e depois pula fora do bloco for */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('-------')
/* no continue pulamos o indice que está dentro do if */ 
for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


externo:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}