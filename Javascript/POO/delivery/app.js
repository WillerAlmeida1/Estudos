var ingredientes = ['mel','água','sal','mostarda']
var modificado = []

for(var i = 0; i < ingredientes.length; i++){
  var letraInicial = ingredientes[i].charAt(0).toUpperCase()
  var restoTexto = ingredientes[i].slice(1)
  var resultado = letraInicial + restoTexto

  modificado[i] = resultado
}

var ordenado = modificado.sort(function(a,b){
  return a.localeCompare(b)
})

console.log(modificado)

var nums = [2, 4, 1, 3, 6, 5]

var numOrdem = nums.sort(function(a,b){
  return a - b
})

console.log(nums)