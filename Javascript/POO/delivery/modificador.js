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

function FnCapitalizaNovo(colecao, atributo) {
  if (typeof colecao[0] == 'object') {
    var resultado = colecao.map(function (obj) {
      var letraInicial = obj[atributo].charAt(0).toUpperCase()
      var restoTexto = obj[atributo].slice(1)
      obj[atributo] = letraInicial + restoTexto

      return obj
    })
    console.log(resultado)
  } else {
    var resultado = colecao.map(function(str){
      var letraInicial = str.charAt(0).toUpperCase()
      var restoTexto = str.slice(1)
      str = letraInicial + restoTexto

      return str
    })
    console.log(resultado)
  }
}

function FnCaixaAlta(vetor) {
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
  novoCapitalizar: FnCapitalizaNovo,
  capitalizar: FnCapitalizar,
  ordenar: FnOrdenar,
  caixaAlta: FnCaixaAlta
}
