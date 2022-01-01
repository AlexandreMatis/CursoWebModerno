const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // para atribuir valores com mpa usar o set
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework) // para acessar os atributos em um map usar o get

const chavesVariadas = new Map([
    [ function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]) 

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)


chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //map não aceita repetição na chave e atribui novo valor
chavesVariadas.set(456, 'b') // o valor pode repetir com uma nova chave unica
console.log(chavesVariadas)