async function obtenerUsuarios() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await respuesta.json();
    return usuarios;
}

function mapearUsuarios(usuarios) {
    return usuarios.map(function (usuario) {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}

async function ejecutar() {
    let usuarios = await obtenerUsuarios();
    console.log(mapearUsuarios(usuarios));
}

ejecutar();