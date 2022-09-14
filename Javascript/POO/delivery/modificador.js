function FnCapitalizar(vetor) {
  let modificado = []
  for (var i = 0; i < vetor.length; i++) {
    var letraInicial = vetor[i].charAt(0).toUpperCase()
    var restoTexto = vetor[i].slice(1)
    var resultado = letraInicial + restoTexto

    modificado[i] = resultado
  }
  return modificado
}

function FnOrdenar(vetor) {
  return vetor.sort(function (a, b) {
    return a.localeCompare(b)
  })
}

function FnCaixaAlta(vetor){
  let modificado = []
  for (var i = 0; i < vetor.length; i++) {
    let capsLock = vetor[i].toUpperCase()
    let resultado = capsLock

    modificado[i] = resultado
  }
  return modificado
}

//export default {capitalizar, ordenar};
export default {
  capitalizar: FnCapitalizar,
  ordenar: FnOrdenar,
  caixaAlta: FnCaixaAlta
}