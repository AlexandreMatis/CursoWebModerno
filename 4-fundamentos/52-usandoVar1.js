{
    {
        {
            {
                var sera = 'Será???' // a declaração com var deixa a variável visivel fora do escopo do bloco
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
}

teste()

//console.log(local) // a variavel declarada no escopo de uma função não fica visivel para fora