const fs = require('fs')
const path = require('path')

function lerConteudo(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })    
}

const caminho = path.join(__dirname, 'dados.txt')

lerConteudo(caminho)
    .then(console.log)