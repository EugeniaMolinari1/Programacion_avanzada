const estudiante = {
    nombre: "Eugenia",
    edad: 20,
    direccion: {
        calle: "Galarza 123",
        ciudad: "Concepcion del Uruguay",
        pais: "Argentina"
    }
};

//Creación de la copia profunda (Deep Copy) con JSON.parse y JSON.stringify
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

copiaEstudiante.nombre = "Camila";
copiaEstudiante.direccion.calle = "San Martín 456";
copiaEstudiante.direccion.ciudad = "Colón";

console.log("Objeto Original (intacto)");
console.log(estudiante);

console.log("Copia Modificada");
console.log(copiaEstudiante);