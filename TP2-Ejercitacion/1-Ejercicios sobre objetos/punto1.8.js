const persona1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Concepcion del Uruguay",
};

const persona2 = {
    profesion: "Ingeniero",
    experiencia: "2 años",
    ciudad: "Buenos Aires",
};

const personaCombinada = Object.assign({}, persona1, persona2);

console.log("Objeto combinado:");
console.log(personaCombinada);

console.log("Original persona1:", persona1);

