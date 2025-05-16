//While com função
/**

  Contador de satisfação de passeio

  Crie um script que avise quando o Dog já passeou o suficiente. 
  Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

  Use a estrutura de repetição while.

  Exiba: 
  Qual o número da volta atual
  Quando o dog estiver satisfeito

  Extra: transforme a lógica em uma função (da forma que conseguir)

 */


function Dog(){
    
  let dogSatisfeito = 5
  let quantidadeVoltasAtual = 0

  while (quantidadeVoltasAtual < dogSatisfeito) {
    console.log(`Quantidade de volta ${quantidadeVoltasAtual + 1}`)

    quantidadeVoltasAtual++

  }

  console.log("Dog Satisfeito")
    
}

Dog()