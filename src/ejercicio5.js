//Valida si arreglo está en orden ascendente

require('colors');

let secuencia = [2, 4, 6, 6, 9]; 
let otra = [5, 3, 8];

const validarOrden = (arreglo) => {
    for (let i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] > arreglo[i + 1]) {
            return false;
        }
    }
    return true;
}


console.log(`La secuencia `+`${secuencia}`.bgBlue+` está en orden ascendente? `+ `${validarOrden(secuencia) ? 'Sí'.green : 'No'.red}`);
console.log(`La secuencia `+`${otra}`.bgBlue+` está en orden ascendente? `+ `${validarOrden(otra) ? 'Sí'.green : 'No'.red}`);
console.log('===================================================');