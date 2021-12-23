//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extrair elementos do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // extrair e mudar o nome das variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // sobrenome undefined// definindo valor padrão para bemHumorada
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // extraindo elementos de um objeto aninhado
console.log (logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa // não é possivel acessar um objeto aninhado inexistente