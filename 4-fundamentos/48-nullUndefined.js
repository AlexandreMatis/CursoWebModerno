let valor //declara a variável não inicializada
console.log(valor)
valor = null //atribui ausencia de valor
console.log(valor)

//console.log(valor.toString()) // o valor null não tem referencia para tipo e seus metodos

const produto = {}
console.log(produto.preco) // o preço não está definido
console.log(produto) // objeto vazio

produto.preco = 3.50 // par chave/valor adicionado dinamicamente
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) // undefined convertido para boolean false
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) // converte null para boolean false
console.log(produto)