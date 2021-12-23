let numero = 1 // variavel declarada e atribuida no escopo do arquivo
{
    let numero = 2 // variavel declarada com let fica restrita ao escopo do bloco
    console.log('dentro = ', numero) // console log de dentro = 2
}
console.log('fora = ', numero) // console log de fora = 1