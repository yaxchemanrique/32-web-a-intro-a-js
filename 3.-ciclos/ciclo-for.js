/* let tabla = 12;

for (let i = 1; i <= 10; i++) {
    console.log(i, ' x ', tabla, ' = ', i * tabla);
} */

/*
PRUEBA DE ESCRITORIO
i = 1    1 <= 10? true   1 x 12 = 12     i = 2
i = 2    2 <= 10? true   2 x 12 = 24    i = 3
i = 3    3 <= 10? true   3 x 12 = 36    i = 4
....
i = 10   10 <= 10? true 10 x 12 = 120   i = 11
i = 11  11 <= 10? false !!!
*/

// CONTINUE
/* let tabla = 12;

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i, ' x ', tabla, ' = ', i * tabla);
} */

// BREAK
let tabla = 12;

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i, ' x ', tabla, ' = ', i * tabla);
}