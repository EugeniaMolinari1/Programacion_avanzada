function filtrarMayoresDe(numeros, valor) {
    return numeros.filter(function (numero) {
        return numero > valor;
    });
}

let numeros = [2, 5, 8, 10, 15];

console.log(filtrarMayoresDe(numeros, 7));