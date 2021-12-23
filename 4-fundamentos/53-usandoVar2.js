var numero = 1 // variavel declarada no escopo do arquivo
{
    var numero = 2 // variavel reescrita no escopo de bloco mas sobrescrevendo a variável
    console.log('dentro =', numero) // console log de dentro do bloco = 2
}
console.log('fora =', numero) // console log fora = 2 porque foi sobrescrita mesmo dentro de um bloco