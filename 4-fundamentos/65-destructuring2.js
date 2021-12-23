const [a] = [10] /* o colchete está fazendo destructuring*/  /* declaração literal de array*/
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //atribuição multipla
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8],[9, 6, 8]] // atribuição em matriz
console.log(nota)