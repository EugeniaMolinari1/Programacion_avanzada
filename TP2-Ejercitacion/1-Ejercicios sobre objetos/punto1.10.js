const libro = {
    titulo: "El principito",
    autor: "Gabriel Garcia Marquez",
    _anioDePublicacion: 1999,

    // Getter
    get anioDePublicacion() {
        return this._anioDePublicacion;
    },

    // Setter
    set anioDePublicacion(nuevoAnio) {
        this._anioDePublicacion = nuevoAnio;
    }
};


libro.anioDePublicacion = 2005;


console.log(libro.anioDePublicacion);