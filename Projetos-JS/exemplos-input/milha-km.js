// Importando o plugin de entrada de dados
import entradaDados from 'readline-sync'

// Criando uma variável para fazer a pergunta e armazenar o valor informado (milhas)
let milhas = entradaDados.question('Informe o valor em milhas: ')

// Fazendo a conversão
let km = milhas/0.62137

// Imprimindo o resultado
console.log(milhas + ' milhas equivale a ' + km + ' km')