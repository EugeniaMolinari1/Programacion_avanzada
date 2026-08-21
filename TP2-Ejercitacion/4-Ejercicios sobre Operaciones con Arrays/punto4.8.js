let numeros = [2, 5, 8, 12, 4];

let resultado = numeros.every(function (numero) {
    return numero > 0;
});

console.log(resultado);