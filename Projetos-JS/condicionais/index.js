// Definindo o conteúdo de cada trimestre
let primeiroTrimestre = 'Alfa Centaurideos'
let segundoTrimestre = 'Líridas'
let terceiroTrimestre = 'Eta Líridas'
let quartoTrimestre = 'Delta Aquárius'

// Coletando a data/mês atual
let data = new Date()
let mes = data.getMonth()

// Condição para exibir o trimestre correto de acordo com a data
if (mes == 0 || mes == 1 || mes == 2){
    console.log(primeiroTrimestre)
} else if (mes == 3 || mes == 4 || mes == 5){
    console.log(segundoTrimestre)
} else if (mes == 6 || mes == 7 || mes == 8){
    console.log(terceiroTrimestre)
} else{
    console.log(quartoTrimestre)
}