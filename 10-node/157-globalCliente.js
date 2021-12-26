require('./157-global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // a atribuição não surte efeito pois o Objeto está freeze
console.log(MinhaApp.nome)