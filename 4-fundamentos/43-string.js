const escola = 'Cod3r'

// Methodos da função String aplicadas sobre a variável
console.log(escola.charAt(4)) // caracter do índice 4 (iniciando em 0)
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) // valor na tabela ASC
console.log(escola.indexOf('3')) // o íncide do caracter

console.log(escola.substring(1)) //substring a partir do indice 1
console.log(escola.substring(0,3)) // substring do indice 0 (incluso) até o 3 (não incluso)

console.log('Escola '.concat(escola).concat('!')) // contatenar
console.log(escola.replace(3, 'e')) // substituir

console.log('Ana,Maria,Pedro'.split(',')) // gera um array usando ',' como separador