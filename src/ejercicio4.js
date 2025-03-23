//Rotar los valores a la derecha

require ('colors');

let datos = [1, 2, 3, 4, 5, 6];
let datosRotados = [];
let rotacion = 0;
const cantidadRotada = 1;

const rotarDerecha = (datos) => {
    for (let i = 0; i < datos.length; i++) {
        rotacion = i + cantidadRotada;
        if (rotacion >= datos.length) {
            rotacion = rotacion - datos.length;
        }
        datosRotados[rotacion] = datos[i];
    }
}

console.log(`Los datos originales son: `+`${datos}`.blue);
rotarDerecha(datos);
console.log(`Los datos rotados a la derecha son: `+`${datosRotados}`.green);
console.log('==============================================');