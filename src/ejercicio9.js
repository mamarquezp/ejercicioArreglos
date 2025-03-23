//Filtrar palabras con más de 5 letras

require ('colors');

let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];
let palabrasFiltradas = [];
let longitud = 5;

const filtrarPalabras = (palabras) => {
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitud) {
            palabrasFiltradas.push(palabras[i]);
        }
    }
}

filtrarPalabras(palabras);
console.log(`Las palabras son: `+`${palabras}`.green);
console.log(`Las palabras con más de ${longitud} letras son: `+`${palabrasFiltradas}`.yellow);
console.log('========================================================================');
console.log(`Hay `+`${palabrasFiltradas.length} palabras`.cyan+` con más de ${longitud} letras`);
console.log('========================================================================');