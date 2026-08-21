function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(function (usuario) {
        return usuario.email === email;
    });
}

let usuarios = [
    { nombre: "Eugenia", email: "euge@gmail.com" },
    { nombre: "Luciana", email: "lu@gmail.com" },
    { nombre: "Camila", email: "cami@gmail.com" }
];

console.log(buscarUsuarioPorEmail(usuarios, "euge@gmail.com"));