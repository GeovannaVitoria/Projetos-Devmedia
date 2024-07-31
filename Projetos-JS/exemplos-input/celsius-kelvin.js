// Importando plugin de entrada de dados
import entradaDados from 'readline-sync'

// Realizando a pergunta para coletar o dado (celsius)
let celsius = entradaDados.question('Informe o valor em celsius: ')

// Fazendo a conversão e transformando a string celsius em number
let k = Number(celsius) + 273.15


// Imprimindo o resultado
console.log(celsius + ' em kelvin é: ' + k)