const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' // armazena a url do JSON em uma constante
const axios = require('axios') // importar o axios para fazer chamadas http

// funções para o filter e reduce
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)    
})
