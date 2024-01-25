/* 
Por el moento, no vamos a usar VAR
var firstName = 'Yaxche';
*/

// Decalaración de una variable
// Mala práctica
let firstName;
// Asignación de una variable
firstName = 'Yaxche';

// Declaración y asignacion de una variable
let lastName = 'Manrique';
console.log(lastName);


const insta = '@yaxchemanrique';

lastName = 'Rios';

// console.log(firstame);
// console.log('linea 22');
// console.log(lastName);
// console.log(insta);

let string = 'Este es un string de texto';
let number = 5;
let boolean = true;

// console.log(string);
// console.log(typeof string);

// console.log(number);
// console.log(typeof number);

// console.log(boolean);
// console.log(typeof boolean);

let suma = 2 + 5;
// console.log(suma);

let resta = 8 - 10;
// console.log(resta);

let multiplicacion = 7 * 4;
// console.log(multiplicacion);

let division = 5 / 8;
// console.log(division);

let modulo = 8 % 5;
// console.log(modulo);

let moduloDos = 14 % 5;
// console.log(moduloDos);

let exponencial = 2 ** 8;
// console.log(exponencial);

const a = false;
const b = 8;
console.log(a / b);
/*
let agePrompt = prompt('Cual es tu edad?');
// let agePrompt = Number(prompt('Cual es tu edad?'));
let age = Number(agePrompt);
// Cuantos años tendra dentro de 10 años?

let tiempoFuturo = 10;
console.log('En 10 años, tendrás');
console.log(age + tiempoFuturo);
*/

let iterador = 0;
console.log(iterador);
iterador = iterador + 1;
console.log(iterador);
iterador = iterador + 1;
console.log(iterador);

let iterador2 = 0;
// iterador = iterador + 2;
iterador2 += 2;
iterador2 += 2;
iterador2 += 2;
console.log(iterador2);

let iterador3 = 0;
// iterador = iterador - 2;
iterador3 -= 2;
iterador3 -= 2;
iterador3 -= 2;
console.log(iterador3);

let iterador4 = 0;
iterador4++;
iterador4++;
iterador4++;
console.log(iterador4);

let iterador5 = 0;
iterador5--;
iterador5--;
iterador5--;
console.log(iterador5);

let variable = 5 > 9;

console.log(variable);
console.log(5 < 9);
console.log(9 < 9);

console.log('5 <= 9', 5 <= 9);
console.log('9 <= 9', 9 <= 9);
console.log('5 >= 9', 5 >= 9);
console.log('9 >= 9', 9 >= 9);

// == ===
let c = 5;
let d = 10;
let e = '5';

console.log('type of c', typeof c);
console.log('type of d', typeof d);
console.log('type of e', typeof e);

console.log('c == d:', c == d);
console.log('c == e:', c == e);

console.log('c === d:', c === d);
console.log('c === e:', c === e);

console.log('c != d:', c != d);
console.log('c != e:', c != e);

console.log('c !== d:', c !== d);
console.log('c !== e:', c !== e);

// Buneas prácticas es unar siempre === y !==

console.log(9 > 5 && 8 > 10); //Y 
console.log(9 > 5 || 8 > 10); //o 