// // Coleção de objetos
// const chuvas_meteoros = [
//     { nome: "Alfa Centaurídeos", pico: "Fev 8", velocidade: "56 km/s"},
//     { nome: "Gama Normídeos", pico: "Mar 14", velocidade: "56 km/s"},
//     { nome: "Pi Pupídeos", pico: "Abr 23", velocidade: "18 km/s"},
//     { nome: "Eta Aquáridas", pico: "Mai 5", velocidade: "66 km/s"},
//     { nome: "Alfa Capricornídeos", pico: "Jul 30", velocidade: "23 km/s"},
//     { nome: "Delta Aquáridas do Sul", pico: "Jul 28", velocidade: "41 km/s"},
//     { nome: "Piscis Austrinídeos", pico: "Jul 28", velocidade: "35 km/s"},
//     { nome: "Fenícidas", pico: "Dez 6", velocidade: "18 km/s"},
//     { nome: "Pupidas-Velidas", pico: "Dez 12", velocidade: "40 km/s"}
// ];

// // Imprimindo maiúsculas no título
// let titulo = '=chuva de meteoros='
// console.log(titulo.toUpperCase())
// console.log('\n')

// // Repetição para cada propriedade da coleção
// for(let propriedades of chuvas_meteoros){
//     // Criando variáveis que recebem o valor de cada propriedade
//     propriedade_nome = propriedades.nome
//     propriedade_pico = propriedades.pico
//     propriedade_velocidade = propriedades.velocidade

//     // Criando um array para a propriedade "pico" e definindo variáveis para cada índice desse novo array
//     let pico_mes_dia = propriedade_pico.split(" ")
//     let pico_dia = pico_mes_dia[1]
//     let pico_mes = pico_mes_dia[0]

//     //  Variável que irá receber o valor por extenso. Iniciando "" para não ser undefined
//     let pico_mes_nome = ""

//     switch (pico_mes) {

//         case "Jan":     pico_mes_nome = "Janeiro";     break;
//         case "Fev":     pico_mes_nome = "Fevereiro";     break;
//         case "Mar":     pico_mes_nome = "Março";     break;
//         case "Abr":     pico_mes_nome = "Abril";     break;
//         case "Mai":     pico_mes_nome = "Maio";     break;
//         case "Jun":     pico_mes_nome = "Junho";     break;
//         case "Jul":     pico_mes_nome = "Julho";     break;
//         case "Ago":     pico_mes_nome = "Agosto";     break;
//         case "Set":     pico_mes_nome = "Setembro";     break;
//         case "Out":     pico_mes_nome = "Outubro";     break;
//         case "Nov":     pico_mes_nome = "Novembro";     break;
//         case "Dez":     pico_mes_nome = "Dezembro";     break;

//         default:        pico_mes_nome = "Mês inválido";    break;
//     }

//     // Criando variáveis para formatação/concatenação da modificação
//     let pico_formatado = pico_dia + ' de ' + pico_mes_nome
//     // Replace para modificar o valor de km/s para quilômetros por segundo
//     let velocidade_formatada = propriedade_velocidade.replace('km/s', 'quilômetros por segundo')

//     // Imprimindo valores com espaço limitado entre formatação e dado
//     console.log('Nome: ' .padEnd(30, ".") + propriedade_nome)
//     console.log('Pico: ' .padEnd(30, ".")  + pico_formatado)
//     console.log('Velocidade: '.padEnd(30, ".") + velocidade_formatada)
//     console.log('\n')
// }
        
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
  }

  const carrosFiat = carros.filter( retornarCarroFiat );

  console.log(carrosFiat);