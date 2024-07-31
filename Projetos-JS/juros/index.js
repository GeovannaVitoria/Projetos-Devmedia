import entradaDados from 'readline-sync'

let diasAtraso = entradaDados.question('Informe os dias de atraso: ')
let valor = entradaDados.question('Informe o valor devido: ')

if(valor>0){
    let diasAtraso = entradaDados.question('Informe os dias de atraso: ')
} else{
    console.log('Você não possui um valor suficiente.')
}

if(diasAtraso>15){
    let juros = 0.01
    let contaJuros = valor * juros
    let novoValor = valor + contaJuros
} else{
    console.log('Os dias não são suficientes.')
}

console.log('Valor original da dívida:' + valor)
console.log('Dias de atraso: ' + diasAtraso)
console.log('Novo valor: ' + novoValor)