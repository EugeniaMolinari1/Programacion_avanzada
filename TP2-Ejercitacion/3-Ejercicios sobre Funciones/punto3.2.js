async function obtenerUsuarios() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await respuesta.json();
    return usuarios;
}

async function imprimirNombresDeUsuarios() {
    let usuarios = await obtenerUsuarios();

    usuarios.forEach(function (usuario) {
        console.log(usuario.name);
    });
}

imprimirNombresDeUsuarios();