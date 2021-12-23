const valores = [7.7, 8.9, 6.3, 9.2] // declaração literal
console.log(valores[0], valores[3])// elementos acessados por índice
console.log(valores[4]) // undefined

valores[4] = 10 // atribuir  valor a um novo elemento
console.log(valores)
console.log(valores.length) // comprimento do array

valores.push({id: 3}, false, null, 'teste') // adicionando um novos elementos de tipagens diferentes
console.log(valores)

console.log(valores.pop()) //  imprime o array excluindo o ultimo elemento
delete valores[0] // exclui o elemento
console.log(valores) // imprime o array com a primeira posição vazia

console.log(typeof valores) // Array é um Object 