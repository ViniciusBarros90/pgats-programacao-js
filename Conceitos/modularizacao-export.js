/**
Sintaxe CommonJS:
 module.export = {} /require('')

ESM-Ecmascript Standard Modules
  export {} / import 
*/

const nomePet = 'Pitoco'

function exibirNomePet(paramNomePet){
  console.log(`O nome do pet é ${paramNomePet}`)

}

exibirNomePet('Pipoca')
exibirNomePet('Bolinha')

// export {} / import 

export{
  exibirNomePet
}