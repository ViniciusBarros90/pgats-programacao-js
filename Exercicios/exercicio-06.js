/**
 * Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
 *  
 */

const nome = "Vira-Lata"
const porte = "G"
const tempo = 31

// decidir o tipo de atividade com base no porte
let atividade

switch(porte) {
    case "P":
      atividade = 'Brincar dentro de casa'
      break
    case "M":
      atividade = 'Caminhada no quarteirão'
      break
    case "G":
      atividade = 'Correr no parque'
      break
    default:
      console.log = 'Porte inválido'  
}

let mensagem 

if (tempo <= 15) {
    mensagem = "Atividade rápida" 
} else if (tempo <= 30) {
    mensagem = "Tempo ideal" 
} else if (tempo > 30) {
    mensagem = "hora da diversão" 
}

console.log(`${ mensagem }: [${ atividade }]`)