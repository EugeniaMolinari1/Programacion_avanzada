function autenticarUsuario(credenciales) {

    let usuarioValido = {
        usuario: "Juan",
        contraseña: "1234"
    };

    if (credenciales.usuario === usuarioValido.usuario &&
        credenciales.contraseña === usuarioValido.contraseña) {
        return true;
    } else {
        return false;
    }
}

let credenciales = {
    usuario: "Juan",
    contraseña: "1234"
};

console.log(autenticarUsuario(credenciales));