//Clasifica positivos y negativos

//const readline = require ('readline-sync')
require ('colors');

let numeros = [0, -2, 5, 3, 0, -7, 9];
let positivos = [];
let negativos = [];
let ceros = [];

const clasificarNumeros = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos.push(numeros[i]);
        } else if (numeros[i] < 0) { 
            negativos.push(numeros[i]);
        } else {
            ceros.push(numeros[i]);
        }
    }
}

clasificarNumeros(numeros);
console.log(`De la cadena de números: `+`${numeros}`.blue);
console.log('==============================================');
console.log(`Los números positivos son: `+`${positivos}`.green);
console.log(`Los números negativos son: `+`${negativos}`.red);
console.log('==============================================');
console.log(`Hay ${positivos.length} números positivos`.green);
console.log(`Hay ${negativos.length} números negativos`.red);
console.log(`Hay ${ceros.length} ceros`.yellow);
console.log('==============================================');