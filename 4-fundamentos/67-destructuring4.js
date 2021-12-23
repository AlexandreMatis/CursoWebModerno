function rand([min = 0, max = 1000]) { //destructurind em array
    if (min > max) [min, max] = [max, min] // inverter variaveis sob a condição
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) 
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) // não é possivel extrair elementedos de undefined