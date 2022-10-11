function capitalizeWords(string){
  let splitWords = string.split(' ')
  console.log(splitWords)
  for(i in splitWords){
    splitWords = splitWords[i].toUpperCase()
    console.log(splitWords)
  }
}

console.log(capitalizeWords('oi bom dia'))

function FnCaixaAlta(vetor) {
  let modificado = []
  for (var i = 0; i < vetor.length; i++) {
    let capsLock = vetor[i].toUpperCase()
    let resultado = capsLock

    modificado[i] = resultado
  }
  return modificado
}

function FnOrdenar(vetor) {
  return vetor.sort(function (a, b) {
    return a.localeCompare(b)
  })
}