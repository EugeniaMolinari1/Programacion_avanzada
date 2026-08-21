// funcion declaration
saludar("Eugenia");

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// funcion expression
const sumar = function (numero1, numero2) {
    return numero1 + numero2;
};

console.log(sumar(5, 3));


// funcion arrow
const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
};

console.log(multiplicar(4, 2));

// funcion con parametros por defecto
function presentar(nombre = "invitado") {
    console.log(`Hola, ${nombre}!`);
}

presentar("Eugenia");
presentar();