const funcs = []

// o let define a variável i com escopo de bloco e envolve o conceito de closure
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//o i tem a memória de bloco de quando foi definida com let 
funcs[2]()
funcs[8]()