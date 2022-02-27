// ATENÇÃO!! --  esse script deverá ser execcutado no navegador.
//Linkar em algum .html ou chamar pelo nome do script no console do navegador.

// FORM: https://docs.google.com/forms/d/e/1FAIpQLScQzfKeTT3ZHkNc68ctElcDDLVgm5Kr-C35MgZM9qyWG7JI2Q/viewform

let pipoca = {
  defaultTime: 10
}
let macarrao = {
  defaultTime: 8
}

let carne = {
  defaultTime: 15
}

let feijao = {
  defaultTime: 12
}

let brigadeiro = {
  defaultTime: 8
}

var opcoes = ['', 'pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro']

alert(
  'Escolha entre um dos itens para preparar: \n1 = Pipoca\n2 = Macarrão\n3 = Carne\n4 = Feijão\n5 = Brigadeiro\n0 = Cancelar'
)

let opcaoComida = prompt()
if (opcaoComida > 0 && opcaoComida < 6) {
  alert('Você escolheu ' + opcoes[opcaoComida] + '.')
} else if (opcaoComida > 5) {
  alert('Opção inválida!')
} else {
  alert('Operação cancelada.')
}
//TROCAR A ESTRUTURA ABAIXO PARA SWITCH
let opcaoTempo = ''
if (opcaoComida == 1) {
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida] +
      ' é ' +
      pipoca.defaultTime +
      ' segundos. Para confirmar digite 1 ou o tempo desejado.'
  )
  opcaoTempo = prompt()
} else if (opcaoComida == 2) {
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida] +
      ' é ' +
      macarrao.defaultTime +
      ' segundos. Para confirmar digite 1 ou o tempo desejado.'
  )
  opcaoTempo = prompt()
} else if (opcaoComida == 3) {
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida] +
      ' é ' +
      carne.defaultTime +
      ' segundos. Para confirmar digite 1 ou o tempo desejado.'
  )
  opcaoTempo = prompt()
} else if (opcaoComida == 4) {
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida] +
      ' é ' +
      feijao.defaultTime +
      ' segundos. Para confirmar digite 1 ou o tempo desejado.'
  )
  opcaoTempo = prompt()
} else if (opcomida == 5) {
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida] +
      ' é ' +
      brigadeiro.defaultTime +
      ' segundos. Para confirmar digite 1 ou o tempo desejado.'
  )
  opcaoTempo = prompt()
} else {
  opcaoTempo = ''
}
// FIM DA ESTRUTURA A SER ALTERADA PARA SWITCH
let coringa = ''
if (opcaoComida == 1) {
  coringa = pipoca.defaultTime
}
console.log(coringa)
if (3 * opcaoTempo > coringa) {
  alert('KABOOOOOOOOOOOOOOOoOoOoOoOOoOMmm!!!!!!\nVocê explodiu o microondas :(')
} else if (2 * opcaoTempo > coringa) alert('teste')
