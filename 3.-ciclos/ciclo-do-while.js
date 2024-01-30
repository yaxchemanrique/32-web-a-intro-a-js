let number = null;

do {
    number = Number(prompt('Ingresa un numero del 1 al 10'));
    console.log(number);
} while (number > 10 || number < 1);