
function geradorDeTagsDeIdentificacao (nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado (idade, porte) {
  if (idade === 1 && porte === 'M') {
    return true
  }
    return false
}

function calcularConsumoDeRacao (nome, idade, peso) {
  const gramasPorKg = 300
  const consumoDiario = peso * gramasPorKg
  return consumoDiario
}

function decidirTipoDeAtividadePorPorte (porte) {
  switch(porte) {
    case "pequeno":
      return 'brincar dentro de casa'
      break
    case "médio":
      return 'caminhada no quarteirão'
      break
    case "grande":
      return 'correr no parque'
      break
    default:
      return 'Porte desconhecido'  
  }
}

async function buscarDadoAsync () {
  const nome = 'Pipoca'
  return nome
}



export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync

}