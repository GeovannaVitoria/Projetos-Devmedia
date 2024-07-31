// Importando o plugin de entrada de dados
import entradaDados from 'readline-sync'

// Perguntando e coletando os dados
let base = entradaDados.question('Qual a base do triângulo? ')
let altura = entradaDados.question('Qual a altura do triângulo? ')

// Realizando a fórmula
let area = (base * altura)/2

// Imprimindo resultado
console.log('A área desse triângulo é: ' + area)