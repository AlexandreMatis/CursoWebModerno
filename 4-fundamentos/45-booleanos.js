let isAtivo = false // atribui false na variavel
console.log(isAtivo) // false

isAtivo = true // atribuir true
console.log(isAtivo) // true

console.log(typeof isAtivo)

// o operador !! "não não" retorna true ou false 
isAtivo = 1
console.log('1 =', !!isAtivo) // 1 = true

console.log('os verdadeiros...')
console.log('3 =', !!3) // inteiro = true
console.log('1 =', !!-1) // inteiro = true
console.log("' ' =", !!' ') // string = true
console.log('string =', !!'texto') // string = true
console.log('array = ', !![]) //array = true
console.log('objeto =', !!{}) // objeto = true
console.log('Infinity =', !!Infinity) // Infinity = true 
console.log('atribuição com true =', !!(isAtivo = true)) // atribuição 

console.log('os falsos...')
console.log('0 =', !!0) // 0 = false
console.log("'' =", !!'') // string vazia = false
console.log('null=', !!null) // null = false
console.log('Nan =', !!NaN) // NaN = false
console.log('undefined = ', !!undefined) // undefined = false
console.log('atribuição com false = ', (isAtivo = false)) // atribuição

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //com expressão lógica || = OU


// o operador || usado para setar um valor padrão
let nome// = 'Lucas' // a atribuição foi comentada mas a variavel fica declarada

console.log(nome || 'Desconhecido')