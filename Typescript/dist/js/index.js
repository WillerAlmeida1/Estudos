"use strict";
//Annotation
let x = 10;
//Inferencia
let y = 10;
//Tipos Básicos
let isName = "Willer";
let age = 20;
let admin = true;
console.log(typeof isName);
const arr = [1, 2, 3];
console.log(arr[0]);
const ArrayGeral = ['Willer', 20, true, ['oi', 'salve']];
console.log(ArrayGeral);
//Object Literal
const user = {
    name: "Willer",
    age: 20,
    studying: true
};
console.log(user);
//temos que seguir estritamente o formato colocado na tipagem do
//objeto, como se fosse um molde
//any
let a = 'a';
a = 'arroz';
a = true;
a = [];
let id = "10";
id = 20;
let userId = 'Willer';
userId = 7;
//E com isso evitamos escrever código desnecessario
//deixando assim o código mais limpo
//Enum
//
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa Homem Aranha",
    size: size.G
};
console.log(camisa);
//Literal type
let algumValor;
//E apesar de usarmos o let para declarar essa variavel, nós não podemos
//alterar o valor dela para outro coisa que não seja o valor inserido
//
let teste;
teste = "autenticado"; //Usuario autenticado
teste = null; // Usuario nao autenticado
//Funcoes
function sum(a, b) {
    return a + b;
} //E esse é o jeito correto
console.log(sum(12, 12));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Willer"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
