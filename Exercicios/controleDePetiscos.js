/* 
Controle de petiscos
Crie um scrip que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
Use a estrutura de repetição for contado.

Exiba:
- Cada vez que um petisco for entregue
- Quando o dog estiver satisfeito
Extra: transforme a lógica em uma função (da forma que conseguir)
*/


function dogSatisfeito(){
  const dogSatisfeito = 4

  for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= dogSatisfeito; quantidadeDePetiscos++) { 
    console.log(`Dando petisco de numero ${quantidadeDePetiscos}`)
}

  console.log('Dog satisfeito')

}

dogSatisfeito()