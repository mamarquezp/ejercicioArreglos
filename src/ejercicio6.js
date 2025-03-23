//Intercalar dos arreglos

require('colors');
let a = ["a", "b", "c"];
let b = [1, 2, 3];
let c = [];

const intercalar = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
}

intercalar(a, b);
console.log(`El arreglo a es: `+`${a}`.blue);
console.log(`El arreglo b es: `+`${b}`.blue);
console.log(`El arreglo intercalado es: `+`${c}`.green);
console.log('===================================================');