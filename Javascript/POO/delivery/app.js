import modificador from "./modificador.js"
import ingredientes from "./ingredientes.js"

var ingredientes = ['mel', 'água', 'sal', 'mostarda']

var resultadoCapitalizar = modificador.capitalizar(ingredientes)
var resultadoOrdenar = modificador.ordenar(resultadoCapitalizar)
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes)


console.log(resultadoCapitalizar)
console.log(resultadoOrdenar)
console.log(resultadoCaixaAlta)