let nome = prompt('Qual o seu nome?')

function jogo(){
  alert(`HMmm então seu nome é ${nome}`)
  let escolha = prompt('Para onde voce quer ir? \n 1 - Cidade\n 2 - Campo')

  if(escolha == 1){
    alert('Voce foi para a cidade, e viu que o dia estava lindo')
  } else if (escolha == 2){
    alert('Voce foi para o campo e o campo aparentava estar mais misterioso que o normal.')
    campo()
  }
}

function campo(){
  alert('Você vê um cara misterioso próximo a uma arvore antiga. Ele esta fazendo algo suspeito')
  let acao = prompt(`O que você vai fazer ${nome}? \n 1 - Quero chegar mais perto`)
  if(acao == 1) {
    alert ('Cheugei')
  }
}

jogo()