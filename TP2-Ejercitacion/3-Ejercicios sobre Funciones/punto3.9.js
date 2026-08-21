function generarToken(usuario) {
    let datos = JSON.stringify(usuario);
    let token = btoa(datos);

    return token;
}

let usuario = {
    nombre: "Juan",
    email: "juan@gmail.com"
};

console.log(generarToken(usuario));