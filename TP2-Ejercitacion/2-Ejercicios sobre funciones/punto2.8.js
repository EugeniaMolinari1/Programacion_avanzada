function procesarArray(array, funcion) {
    return array.map(funcion);
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];

console.log(procesarArray(numeros, multiplicarPorDos));