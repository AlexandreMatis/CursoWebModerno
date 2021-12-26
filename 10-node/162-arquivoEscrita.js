const fs = require('fs')

const produto = {
    nome: 'Celular',
    preço: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/162-arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})