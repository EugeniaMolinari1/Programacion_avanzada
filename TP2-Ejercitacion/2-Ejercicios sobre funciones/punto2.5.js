function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
};

const persona = {
    nombre: "Eugenia",
    edad: 20
};

actualizarEdad(persona, 21);
console.log(persona);
