import capitalizar from "./modificador"
import ordenar from "./modificador"

var ingredientes = ['mel', 'água', 'sal', 'mostarda']

var resultadoCapitalizar = capitalizar(ingredientes)
var resultadoOrdenar = ordenar(resultadoCapitalizar)

console.log(resultadoCapitalizar)
console.log(resultadoOrdenar)
