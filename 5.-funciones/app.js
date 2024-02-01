



/* let isMember = confirm('Estás registrado?')
let user = prompt('Escribe tu nombre')

function saludoUsuario (registro, userName){
    if( registro ){
        return 'Bienvenido a tu perfil: ' + userName
    }else{
        return 'Hola ' + userName + ' deberías registrarte'
    }
}

console.log( saludoUsuario (isMember, user) )  */

/* 
//función que sume dos números

function sumar (num1, num2){

    let total = num1 + num2
    console.log( total )
    return `El resultado de la suma es: ${total} `

}

//sumar (2, 1)

console.log( sumar(4,6) )
//console.log( sumar(2,9) ) */



//función que imprima en pantalla una lista de elementos almacenados en un array (ciclo for)
//Encontrar un elemento específico dentro de ese array

/* let cosas = ['Copa','Libro','Linterna','Mouse','Camisa','Gorra','Flauta']

function mostrarElementos ( array, elemento ){
    for(let i = 0; i < array.length; i++){
        if(array[i] === elemento){
            return true
        }
    }
    return false
}

let existe = mostrarElementos(cosas, 'Linterna') 
console.log( existe ? 'Elemento encontrado' : 'Ups, no lo encontramos :(' ) */





//Función de expresión

/* const sumar = function (num1, num2){
    let total = num1 + num2
    console.log( total )
    return `El resultado de la suma es: ${total} `
}

console.log(sumar(2,5)) */

//Función de tipo flecha o arrow function

const sumar = (num1, num2) => {
    let total = num1 + num2
    console.log( total )
    return `El resultado de la suma es: ${total} `
}
console.log(sumar(6,6))