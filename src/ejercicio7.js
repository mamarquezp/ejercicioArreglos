//Cuenta las vocales en cada palabra del arreglo

require('colors');

const palabras = ["computadora", "mesa", "silla", "mouse"];
const vocales = ["a", "e", "i", "o", "u"];
let contador = 0;
const cantidadVocales = [];
const contarVocales = (palabras) => {
    for (let i = 0; i < palabras.length; i++) {
        for (let j = 0; j < palabras[i].length; j++) {
            if (vocales.indexOf(palabras[i][j]) !== -1) {
                contador++;
            }
        }
        cantidadVocales.push(contador);
        contador = 0;
    }
}

console.log(`Las palabras son: `+`${palabras}`.green);
contarVocales(palabras);
for (let i = 0; i < palabras.length; i++) {
    console.log(`La palabra `+`${palabras[i]}`.blue+` tiene `+`${cantidadVocales[i]}`.yellow+` vocales`);
}
