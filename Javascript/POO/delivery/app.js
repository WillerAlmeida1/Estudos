var ingredientes = ['mel', 'água', 'sal', 'mostarda']

function capitalizar(ingredientes) {
  modificado = []
  for (var i = 0; i < ingredientes.length; i++) {
    var letraInicial = ingredientes[i].charAt(0).toUpperCase()
    var restoTexto = ingredientes[i].slice(1)
    var resultado = letraInicial + restoTexto

    modificado[i] = resultado
  }
  return modificado
}

function ordenar(ingredientes) {
  return ingredientes.sort(function (a, b) {
    return a.localeCompare(b)
  })
}

var resultadoCapitalizar = capitalizar(ingredientes)
var resultadoOrdenar = ordenar(resultadoCapitalizar)

console.log(resultadoCapitalizar)
console.log(resultadoOrdenar)
