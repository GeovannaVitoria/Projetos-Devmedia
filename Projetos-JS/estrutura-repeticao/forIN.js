// // Exemplo 1
// // Criando o objeto 'carro'
// let carro = {nome: "Argo", marca: "Fiat", preco: "5000", ano: "2020"}

// let percentualDesconto = 5 

// for (let propriedade in carro){ // Estrutura de repetição for in para percorrer TODO o objeto
//     if(propriedade == "preco"){ // Se durante a iteração for encontrado a propriedade 'preco', faça:
//         let preco = propriedade // Criando variável para facilitar
//         let desconto = (carro[propriedade] * percentualDesconto)/100
//         let novoPreco = carro[propriedade] - desconto
//         console.log('Novo preço = ' + novoPreco)
//     } else{
//         console.log(propriedade + ': ' + carro[propriedade]) // Imprimindo o valor original (preco: 5000), caso a propriedade não possua o nome de propriedade 'preco'
//     }
// }


// Exemplo 2
let produtos = [ // Criando a coleção de objetos
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){ // Iteração para percorrer todo a coleção

    let produto = produtos[contador]; // Criando variável para alocar cada índice da coleção

    for ( let propriedade in produto ){ // "in produto" pois é necessário percorrer cada índice dentro da coleção

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00"); // Impressão de todas as propriedades de cada objeto com o preço atualizado

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }
    }
    console.log("\n");
}