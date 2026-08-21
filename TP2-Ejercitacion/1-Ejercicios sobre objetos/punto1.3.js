// Objeto llamado libro
const libro = {
    titulo: "El principito",
    autor: "Gabriel Garcia Marquez",
    anioDePublicacion: 1999,

    descripcion() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
    }
};

// Imprimir cada propiedad
console.log(libro.descripcion());
