const moduloA = require('../../150-moduloA')
console.log(moduloA.ola)

//importando mudulos de um arquivo index.js apenas dizendo a pasta
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// require de um modulo core
const http = require('http')

//criando servidor
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) //ouvindo na porta 8080 - o programa fica rodando