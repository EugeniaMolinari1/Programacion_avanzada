function actualizarUsuario(usuario, cambios) {
    return Object.assign(usuario, cambios);
}

let usuario = {
    nombre: "Juan",
    edad: 25,
    email: "juan@gmail.com"
};

let cambios = {
    edad: 26,
    email: "juanNuevo@gmail.com"
};

console.log(actualizarUsuario(usuario, cambios));