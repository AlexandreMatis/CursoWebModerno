const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

const template = `
    Olá  
    ${nome}!` // o template string aceita quebra de linha e interpolação de variáveis

console.log(concatenacao, template)

//expressões...

console.log(`1 + 1 = ${1 + 1}`) // interpolar expressões

const up = texto => texto.toUpperCase() // arrow function aplicando methodo da string "para maiúculas"
console.log(`Ei... ${up('cuidado')}!`) // interpolar funções