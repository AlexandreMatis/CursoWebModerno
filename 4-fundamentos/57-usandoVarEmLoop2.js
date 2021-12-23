const funcs = [] // array vazio

// inserir funções dentro do array
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// como var não tem escopo de bloco o valor do i após o laço é 10 independente da posição da função no array
funcs[2] () 
funcs[8] ()