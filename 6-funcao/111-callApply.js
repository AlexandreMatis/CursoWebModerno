function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // está acessando o escopo global
console.log(produto.getPreco()) // acessando através do objeto

const carro = { preco: 49990, desc: 0.20 }

// o carro é o objeto de contexto passado pelo metodo call e apply
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // o primeiro parametro é o contexto e os demais são parametros da função
console.log(getPreco.apply(global, [0.17, '$'])) // apply recebe os parametros da função com array