function sumarElementos(numeros) {
    return numeros.reduce(function (acumulador, numero) {
        return acumulador + numero;
    }, 0);
}

let numeros = [1, 2, 3, 4, 5];

console.log(sumarElementos(numeros));