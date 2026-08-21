function crearMultiplicador(x) {

    return function (numero) {
        return numero * x;
    };

}

let multiplicarPorTres = crearMultiplicador(2);

console.log(multiplicarPorTres(6));