let curso_idiomas = [
    {nome: "Inglês", preco: 2500, carga_horaria: 160},
    {nome: "Espanhol", preco: 1500, carga_horaria: 110},
    {nome: "Francês", preco: 3600, carga_horaria: 200},
    {nome: "Chinês", preco: 5500, carga_horaria: 400},
    {nome: "Alemão", preco: 3800, carga_horaria: 230}
]

for (let propriedades of curso_idiomas){
    console.log("\nNome do curso: " + propriedades.nome) 
    console.log("\nCarga horária do curso: " + propriedades.carga_horaria + " horas") 
    console.log("\nPreco do curso: R$" + propriedades.preco + ",00") 

    let valor_hora = propriedades.preco/propriedades.carga_horaria
    if(valor_hora >= 15){
        console.log("\nHora/aula superior ou igual a R$15,00")
    }else{
        console.log("\nHora/aula inferior a R$15,00")
    }
}