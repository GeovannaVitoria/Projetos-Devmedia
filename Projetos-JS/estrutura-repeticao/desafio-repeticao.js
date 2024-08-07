// // Exercício: Criar uma coleção de objetos 'cursos', imprimir cada propriedade/atributo e verificar se a hora/aula é superior ou inferior a R$ 15,00
// let cursos = [
//     {id: 0, nome: "Inglês", preco: 2500, cargaHoraria: 160},
//     {id: 1, nome: "Espanhol", preco: 1500, cargaHoraria: 110},
//     {id: 2, nome: "Francês", preco: 3600, cargaHoraria: 200},
//     {id: 3, nome: "Chinês", preco: 5500, cargaHoraria: 400},
//     {id: 4, nome: "Alemão", preco: 3800, cargaHoraria: 230}
// ]

// // Estrutura utilizada 'for...of' pois percorremos uma coleção de objetos, sendo necessário a leitura de cada OBJETO. OBS.: Objeto 1 = id 0; Objeto 2 = id 1....

// for (let objetos of cursos){ 
//     let nome = objetos.nome // Coletando o valor de cada propriedade 
//     let preco = objetos.preco
//     let cargaHoraria = objetos.cargaHoraria
//     let valorHora = preco/cargaHoraria

//     console.log('Nome: ' + nome + '\n' + 'Preço: R$ ' + preco + ',00' + '\n' + 'Carga Horária: ' + cargaHoraria) // Imprimindo os valores
    
//     if(valorHora >= 15){ // Verificando hora/aula
//         console.log('Hora/aula superior a R$ 15,00')
//     } else{
//         console.log('Hora/aula inferior a R$ 15,00')
//     }

//     console.log('\n')
// }

let nome = "   Diego    "
// let trim = nome.trim() // Impressão = 5
console.log(nome.length) // Impressão = 12