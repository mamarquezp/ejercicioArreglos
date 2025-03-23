// Subarreglos sin 0
require('colors');

const numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];
let subarreglo = [[]];
let subarregloActual = 0;

let dividirArreglo = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            subarregloActual++;
            subarreglo[subarregloActual] = [];
        } else {
            subarreglo[subarregloActual].push(numeros[i]);
        }
    }
}

dividirArreglo(numeros);
console.log(`El arreglo original es: `+`${numeros}`.blue);
console.log(`Los subarreglos sin 0 son: `)
for 
(let i = 0; i < subarreglo.length; i++) {
    console.log(`${subarreglo[i]}`.green);
}
console.log('===================================================');

