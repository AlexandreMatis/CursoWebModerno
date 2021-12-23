// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // passando 2 parametros
imprimirSoma(2) // passando um parâmetro a segundo fica como undefined e o resultado NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // usa os 2 primeiros parâmetros e ignora o resto
imprimirSoma() // sem definir parametros resulta NaN

// Função com retorno
function soma(a, b = 1 /* se não for passado o parametro asume-se o valor padrão*/){
    return a + b
}

console.log(soma(2, 3)) // o parametro do console.log é o retorno da função 
console.log(soma(2)) // usando o valor padrão do parametro b
console.log(soma()) // sem passar o parametro de a fica como undefined