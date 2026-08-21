function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

const producto = {
    nombre: "Coca-Cola",
    precio: 150,
    disponible: true,
};


console.log(tienePropiedad(producto, "precio"));
console.log(tienePropiedad(producto, "descuento"));  
