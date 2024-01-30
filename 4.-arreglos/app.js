// let user = ['Yaxche', 'Manrique', 30, '@yaxchemanrique', true];
// console.log(user);
// console.log(user[2]);

// user[2] = 31;
// console.log(user[2]);
// console.log(user);

// console.log(user.indexOf('@yaxchemanrique'));
// console.log(user.indexOf('Ríos'));

/* let pokemon = ['pikachu', 'bulbasaur', 'charmander'];
console.log(pokemon);

let pokemonLength = pokemon.push('evee');
console.log(pokemon);
console.log(pokemonLength);

pokemonLength = pokemon.unshift('snorlax');
console.log(pokemon);
console.log(pokemonLength);

pokemon.pop();
console.log(pokemon);

pokemon.shift();
console.log(pokemon); */

/* let string = 'pikachu,bulbasaur,charmander';
let stringToArray = string.split(',');
console.log(string);
console.log(stringToArray);

let array2 = ['bulbasaur', 'pikachu', 'charmander', 'snorlax'];

let sorted1 = stringToArray.sort();
let sorted2 = array2.sort();

console.log(sorted1);
console.log(sorted2);

let array3 = [1, 100, 10000, 10000, 5];
let sorted3 = array3.sort();
console.log(sorted3); */

// Iteración de Arreglos
let user = ['Yaxche', 'Manrique', 'Rios', 30, 2, '@yaxchemanrique', true];
/* 
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

console.log(user[5]); */

/* for (let i = 0; i <= 4; i++) {
    console.log(i, user[i]);
} */

console.log(user.length);
for (let i = 0; i <= user.length - 1; i++) {
    console.log(i, user[i]);
}

console.log('-------------------------');

for (let i = 0; i < user.length; i++) {
    console.log(i, user[i]);
}