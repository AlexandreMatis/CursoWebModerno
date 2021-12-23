function teste1(num) {
    if(num > 7) 
        console.log(num) // sem o bloco delimitado por chaves apenas uma sentença será associada do "if"

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ';', não usar com as estruturas de controle
        console.log(num) // o console.log está fora do if pelo ';'
    }
}

teste2(6)
teste2(8)