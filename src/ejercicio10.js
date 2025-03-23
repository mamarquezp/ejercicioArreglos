//Buscar número más repetido

require ('colors');

let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];
let datosSinRepetir = [];
let cantidadRepetidos = [];
let mayor = 0;
let numeroMasRepetido;

const buscarNumeroMasRepetido = (datos) => {
    for (let i = 0; i < datos.length; i++) {
        if (datosSinRepetir.includes(datos[i])) {
            cantidadRepetidos[datosSinRepetir.indexOf(datos[i])]++;
        } else {
            datosSinRepetir.push(datos[i]);
            cantidadRepetidos.push(1);
        }
    }
    for (let i = 0; i < cantidadRepetidos.length; i++) {
        if (cantidadRepetidos[i] > mayor) {
            mayor = cantidadRepetidos[i];
            numeroMasRepetido = datosSinRepetir[i];
        }
    }
}

console.log(`Los datos son: `+`${datos}`.green);
buscarNumeroMasRepetido(datos);
console.log(`El número más repetido es: `+`${numeroMasRepetido}`.blue +` y se repite `+ `${mayor} veces`.blue);