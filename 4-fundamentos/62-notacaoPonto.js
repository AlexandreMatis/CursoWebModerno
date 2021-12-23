console.log(Math.ceil(6.1)) // arrendondamento

const obj1 = {}
obj1.nome = 'Bola' // criar atribuito dentro de um objeto
//obj1['nome'] = 'Bola2' // alternativa com notação chave
console.log(obj1.nome)

function Obj (nome) {// parametro nome
    this.nome = nome // o nome associado fica publico numa função instanciada
    this.exec = function() { // a função fica publica numa função instanciada
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()