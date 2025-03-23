//Ejercicio 1 Eliminar duplicados
require ('colors')

let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];

let nombresUnicos = [];
let nombresRepetidos = [];

const eliminarDuplicados = (nombres) => {
    for (let i = 0; i < nombres.length; i++) {
        if (nombresUnicos.indexOf(nombres[i]) === -1) {
            nombresUnicos.push(nombres[i]);
        } else {
            nombresRepetidos.push(nombres[i]);
        }
    }
}
eliminarDuplicados(nombres)
console.log(`Los nombres únicos son: `+ `${nombresUnicos}`.green);
console.log(`Los nombres repetidos son: `+ `${nombresRepetidos}`.red);