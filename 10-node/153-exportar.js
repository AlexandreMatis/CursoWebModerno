console.log(module.exports) //objeto exportado vazio
console.log(module.exports === this)
console.log(module.exports === exports)
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // mudando o exports não muda o module.exports
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }