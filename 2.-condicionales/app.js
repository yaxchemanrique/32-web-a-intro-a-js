


let nombre = 'pepe'
let color = undefined
let pais = ''

console.log( Boolean(nombre) ) //true
console.log( Boolean(color) ) //true
console.log( Boolean(pais) ) //true

if('0'){
    console.log('Tu valor es verdadero')
}else{
    console.log('Tu valor es falso')
}


let colorSemaforo = 'rojo'.toLowerCase()

switch(colorSemaforo){
    case 'rojo':
        console.log('Detente')
    break

    case 'amarillo':
        console.log('Reduce la velocidad')
    break

    case 'verde':
        console.log('Avanza')
    break

    default:
        console.log('No conozco ese color')
}


let user = confirm('Estás registrado?')
let msj = 'Tu entrada te cuesta ' + (user ? '$3' : '$14')

console.log(msj)