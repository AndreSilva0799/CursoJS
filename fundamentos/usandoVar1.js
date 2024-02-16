{
    {
        {
            {
                var sera = 'Será ???' // var tbm fica visivel fora do bloco 
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //var quando está dentro da function não conseguimos ver fora do bloco de função teste abaixo
}

teste()
console.log(local)