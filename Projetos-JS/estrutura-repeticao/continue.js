let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue; // Interrompe o loop nos alunos com média menor que 6, porém não interrompe aos outros alunos
    }

    console.log("Id: " + aluno.id); // Vai imprimir de todos os alunos que não possuem média menor que 6
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}