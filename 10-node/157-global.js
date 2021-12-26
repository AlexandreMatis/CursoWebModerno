// console.log(global)
global.MinhaApp = Object.freeze ({ //o Object.freeze não permite alteração mesmo sendo global
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})