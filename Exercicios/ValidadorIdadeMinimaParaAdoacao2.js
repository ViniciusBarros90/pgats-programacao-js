/*
Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.


  idade 1 + porte M = nao
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte

  */
 

const idadeAdocao = 2

const nomeDog = "Simba"
const idadeDog = 1
const Porte = "pequeno"

const AptoAdocao = idadeDog < idadeAdocao ? 'Não pode ser adotado, ainda!': 'Pode ser adotado'   
console.log(AptoAdocao)       
               
console.log(porte === pequeno || idadeAdocao >=2)

