function fnOrdenar(colecao, atr){
  if(typeof colecao[0] == 'object'){
    return colecao.sort(function (a, b){
      return a[atr].localeCompare(b[atr])
    })
  } else {
    return colecao.sort(function (a, b){
      return a.localeCompare(b)
    })
  }
}

function FnCapitalizar(colecao, atributo) {
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

function fnCapsLock(colecao, atr){
  if(typeof colecao[0] == 'object'){
    var resultado = colecao.map(function(obj){
      var capsLock = obj[atr].toUpperCase()
      obj[atr] = capsLock
      
      return obj
    })
    console.log(resultado)
  } else {
    var resultado = colecao.map(function(str){
      var capsLock = str.toUpperCase()
      str = capsLock

      return str
    })
    console.log(resultado)
  }
}

//export default {capitalizar, ordenar};
export default {
  capitalizar: FnCapitalizar,
  ordenar: fnOrdenar,
  caixaAlta: fnCapsLock
}
