// let e const
{
    var a = 2
    let b = 3
    console.log(b) // a variavel declarada com let só é acessivel dentro do bloco {}
}
console.log(a) // a variavel definida com var tem escopo global

//Template String
const produto = 'iPad'
console.log(`${produto} 
é 
caro!`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)