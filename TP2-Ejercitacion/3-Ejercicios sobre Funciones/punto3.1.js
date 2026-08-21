async function obtenerUsuarios() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await respuesta.json();

    console.log(usuarios);
}

obtenerUsuarios();