/**
 * describe -> agrupador de teste
 * it -> implementação do teste
 * 
 * 
 */
import { error } from 'node:console'
import { exibirNomeDoDog } from '../Conceitos/testeDeUnidade.js'
import assert from 'node:assert'

describe('Testes do projeto', () => {
  it('Deve exibir o nome do Dog com letras maiúscula', () => {
    assert.strictEqual(exibirNomeDoDog('Mimosa'), 'MIMOSA')
    
  })
  
  it('primeiro teste', () => {

  })

  it('segundo teste', () => {
    

  })

})