// Objeto é uma coleção de pares chave / valor

const prod1 = {} // associando um objeto vazio
prod1.nome = 'Celular Ultra Mega' // Adicionar uma propriedade dinamicamente
prod1.preco =  4998.90 // Adicionar outra propriedade
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço, possiveis com identificador entre colchetes

console.log(prod1)

// declaração literal
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)