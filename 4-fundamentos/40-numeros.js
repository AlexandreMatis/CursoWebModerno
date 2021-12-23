const peso1 = 1.0 // declaração usual
const peso2 = Number('2.0') // declaração com a função Number

// como o decimal é zero os valores impressos são inteiros sem decimais
console.log(peso1, peso2) 

// é inteiro? método da função Number
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))  

const avaliacao1 = 9.871
const avaliacao2 = 6.871

// acrescentada a verificação de numeros não inteiros
console.log(Number.isInteger(avaliacao1))
console.log(Number.isInteger(avaliacao1))

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) // valor completo

// exibe 2 casas decimais // método da função Number // não altera o valor da constante media
console.log(media.toFixed(2))  

console.log(media.toString(2)) // em binário //

console.log(typeof media)
console.log(typeof Number)