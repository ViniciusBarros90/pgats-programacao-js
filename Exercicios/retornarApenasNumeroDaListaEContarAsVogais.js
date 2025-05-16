//Retornar apenas números da lista
const listao = [10 , 11, 'sol', 'lua', 5, 3, 'casa', 'cachorro']

function somenteNumeros(lista) {
  return lista.filter(item => typeof item ==='number')
}

const retorno = somenteNumeros(listao)
console.log(retorno)

//Contar vogais
function contarVogais(lista){
  const vogais = ['a', 'e', 'i', 'o', 'u']
  let contador = 0;

  for(let item of lista) {
    if (typeof item === 'string') {
      for(let letra of item) {
        if(vogais.includes(letra)){
          contador ++  
        }    
      }
    }
  } 

  return contador
}

const qtdeDeVogais = contarVogais(listao)
console.log(`Quantidade de vogais: ${qtdeDeVogais}`)





