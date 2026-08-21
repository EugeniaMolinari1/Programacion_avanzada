function validarFormulario(formulario) {
    if (formulario.nombre && formulario.email && formulario.password) {
        return true;
    } else {
        return false;
    }
}

let formulario = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "1234"
};

console.log(validarFormulario(formulario));