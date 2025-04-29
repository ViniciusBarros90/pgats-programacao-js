/*
Classificador de porte automático
Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- Até 10kg -> Pequeno; acima disso -> Médio
Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado
Extra: transforme a lógica em uma função (da forma que conseguir)
*/

const nome = 'Simba'
const peso = 5

function porte(nome, peso) {
  const porteClassificado = peso <= 10 ? 'Porte pequeno' : 'Porte médio'
  
  console.log(`------`)
  console.log(`Nome: ${nome}`)
  console.log(`peso: ${peso}`)
  console.log(`porte: ${porteClassificado}`)
  console.log(`------`)
}


porte('Late', 8)
porte('Late IAU', 20)
porte('Vira-Lata', 5)



