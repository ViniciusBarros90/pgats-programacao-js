// informacoes de um dog que nao mudam
const nome  = 'Simba'
const raca = 'Ilhasa'
const sexo = 'Macho'
const cor = 'Branco'
const anoDeNascimento = '2014'
const porte ='P'

// informacoes de um dog que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'P'

//hoisting > içamento ou elevação

const irmaos = [
{
    nome: "Thor",
    idade:  2
},
{
    nome: "Hela",
    idade: 3
}

]

console.table(irmaos)

const valor = "50 + 50"
console.log(valor)

/*
*String
*/

//'Turma' - aspas simples ou single quote
// "Turma" - aspas duplas ou double quote
// `Turma` - template strings

const turma = "02"
console.log("Aula 03 da turma " + turma  + " no sábado dia 05 de abril de 2025 ") //concatenacao
console.log(`Aula 03 da turma ${ turma } no sábado dia 05 de abril de 2025 `)  //interpolacao

console.log(turma.length) // Ver a quantidade de caracteres

//Split - separar string
const nomeDeAlunos = "Vinicius Simba Jessica Matheus"
const nomesDosAlunosSplit = nomeDeAlunos.split(" ") // Está validando com espaço, toda vez que encontrar espaço ele separa os nomes em uma lista de vetor
console.log(nomesDosAlunosSplit)

console.log(nomeDeAlunos.toLowerCase())
console.log(nomeDeAlunos.toUpperCase())

console.log(nomeDeAlunos.includes("Antonio")) //Validar se está incluso na variavel 
console.log(nomeDeAlunos.replaceAll("a", "i")) //Trocar a pelo i

const espaco = "     12 teste  "
console.log(espaco.trim()) //Remover espaços antes de depois

//slice
let dataParaCorte = "05 de Abril de 2025"
console.log(dataParaCorte.slice(0, 2)) // Para escolher o "05" da data, começa na posição 0 até o fim do espaço que é a posição 2
