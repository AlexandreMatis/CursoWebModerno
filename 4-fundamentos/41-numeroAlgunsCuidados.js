console.log(7 / 0) // divisão por zero retorna infinito
console.log("10"/2) //é possivel string de números ser lida como number
console.log('3' + 2) // operador "+" faz concatenação quando usado string e número // a string "ganha"
console.log('3' - 2) // operador "-" não faz sentido com string então a operação com number "ganha"
console.log('Show!' * 2) // string com não numeros retornam NaN em operações com numeros
console.log(0.1 + 0.7) // o retorno não é exato por especificação do ES
//console.log(10.toString())// Methodo inválido diretamente em um numero
console.log((10.345).toFixed(2)) // o metodo pode ser aplicado em numeros entre parentereses // arredonda pra cima