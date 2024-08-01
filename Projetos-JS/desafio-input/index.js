// Importanção do plugin
import entradaDados from 'readline-sync'

// Uso do plugin para entrada de dados e da função number para alterar o tipo de dado
var valorDevido = Number(entradaDados.question('Informe o valor devido: '))

// Estrutura condicional aninhada
if(valorDevido > 0){ // 1ª estrutura if tratando erro do valor da dívida
    var diasVencimento = entradaDados.question('Informe quantos dias se passaram desde o vencimento: ')
    if(diasVencimento > 0){ // 2ª estrutura tratando erro do dia do vencimento

        if(diasVencimento > 15){ // 3ª estrutura verificando qual taxa será aplicada de acordo com os dias de vencimento
            // Taxa de 10%
            var taxa = '10%'
            var juros = valorDevido * 0.1
            var totalJuros = valorDevido + juros
        } else{
            // Taxa de 5%
            var taxa = '5%'
            var juros = valorDevido * 0.05
            var totalJuros = valorDevido + juros
        }

        console.log('Valor original da dívida: ' + valorDevido)
        console.log('Dias atrasados: ' + diasVencimento)
        console.log('Taxa de juros: ' + taxa )
        console.log('Valor total com juros: ' + totalJuros)

    } else{
        console.log('Você está em dia!') // Resultado negativo da 2ª condição
    }

} else{
    console.log('O valor precisa ser maior que 0') // Resultaado negativo da 1ª condição
}