let numeros = [10, 5, 7, 8, 9, 6, 12, 4]

let total_par = 0
let total_impar = 0
contador = 0

while (contador < numeros.length){
    if(numeros[contador] % 2 == 0){
        total_par++
    } else{
        total_impar++
    }
    contador++
}

console.log('Total par: ' + total_par)
console.log('Total ímpar: ' + total_impar)