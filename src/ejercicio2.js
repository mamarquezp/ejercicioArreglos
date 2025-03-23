//Calcula promedio de notas sin la más alta y la más baja

//const readline = require ('readline-sync')
require ('colors');

let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];
let promedio = 0;

const ordenarNotas = (notas) => {
    notas.sort((a,b) => a-b);
}

const calcularPromedio = (notas) => {
    let suma = 0;
    for (let i = 1; i < notas.length - 1; i++) {
        suma += notas[i];
    }
    promedio = suma / (notas.length - 2);
}

ordenarNotas(notas);
calcularPromedio(notas);
console.log(`Las notas ordenadas son: `+`${notas}`.green);
console.log(`El promedio de notas sin la más alta y la más baja es: `+ (promedio >= 6 ? `${promedio}`.green : `${promedio}`.red));