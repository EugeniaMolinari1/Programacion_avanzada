let personas = [
    { nombre: "Eugenia", edad: 25 },
    { nombre: "Lucia", edad: 31 },
    { nombre: "Carlos", edad: 40 }
];

let personaEncontrada = personas.find(function (persona) {
    return persona.edad > 30;
});

console.log(personaEncontrada);