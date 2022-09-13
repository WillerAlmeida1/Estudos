
//Annotation
let x: number = 10

//Inferencia
let y = 10

//Tipos Básicos

let isName: string = "Willer"
let age: number = 20
let admin: boolean = true

console.log(typeof isName)

const arr: number[] = [1, 2, 3]
console.log(arr[0])

const ArrayGeral: [string, number, boolean, string[]] = ['Willer',20,true,['oi','salve']]

console.log(ArrayGeral)


//Object Literal

const user: {name: string, age: number, studying: boolean} = {
  name: "Willer",
  age: 20,
  studying: true
}
console.log(user)
//temos que seguir estritamente o formato colocado na tipagem do
//objeto, como se fosse um molde

//any

let a:any = 'a'
a = 'arroz'
a = true
a = []

let id: number | string = "10"
id = 20

//Com isso a gente pode ter mais de 1 tipo em uma variavel
//Mas só servem tipos que foram tipados

type myIdType = number | string 

let userId: myIdType = 'Willer'
userId = 7

//E com isso evitamos escrever código desnecessario
//deixando assim o código mais limpo


//Enum
//
enum size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}

const camisa = {
  name: "Camisa Homem Aranha",
  size: size.G
}

console.log(camisa)


//Literal type

let algumValor: "Algo"

//E apesar de usarmos o let para declarar essa variavel, nós não podemos
//alterar o valor dela para outro coisa que não seja o valor inserido
//


let teste: "autenticado" | null;
teste = "autenticado"; //Usuario autenticado
teste = null // Usuario nao autenticado


//Funcoes

function sum(a: number, b: number){
  return a + b 
}//E esse é o jeito correto

console.log(sum(12,12))

function sayHello(name: string): string{
  return `Hello ${name}`
}

console.log(sayHello("Willer"))


function logger(msg: string): void{
  console.log(msg)
}

logger("Teste!")