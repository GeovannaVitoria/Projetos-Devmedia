var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];
// Buscanco o tamanho do array
var tamanho = curiosidades_chuck_norris.length

// Sorteanod um número aleatório de acordo com o tamanho/números do array
var numeroAleatorio = Math.floor(Math.random() * tamanho)

// Coletando o título e curiosidade com o número sorteado e buscando no array através do .titulo/.conteudo
var titulo = curiosidades_chuck_norris[numeroAleatorio].titulo
var conteudo = curiosidades_chuck_norris[numeroAleatorio].conteudo

// Imprimindo no terminal
console.log(numeroAleatorio)
console.log('Título: ' + titulo)
console.log('Conteúdo: ' + conteudo)