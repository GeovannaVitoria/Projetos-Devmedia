var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação", // Índice 0 que corresponde ao dia 1
    "Imagine uma nova história para sua vida e acredite nela", // Índice 1 que corresponde ao dia 2
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo", // Índice 2 que corresponde ao dia 3
    "Se existe uma forma de fazer melhor, descubra-a", // Índice 3 que corresponde ao dia 4
    "Seja a mudança que você deseja ver no mundo.", // Índice 4 que corresponde ao dia 5
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
]

var data_atual = new Date() // Data atual com dia e hora
var numero_escolhido = data_atual.getDate() // Data atual com o dia do mês

console.log('Número sorteado = ' + numero_escolhido) // Exibindo o número sorteado
numero_escolhido-- // Decrementando o valor da data, para corresponde ao índice dentro do array 

console.log('----- Frase do dia -----')
console.log('Mensagem: ' + frases_do_dia[numero_escolhido]) // Exibindo a resposta final
