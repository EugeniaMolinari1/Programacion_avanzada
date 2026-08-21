//Objeto producto base
const producto = {
    nombre: "Coca-Cola",
    precio: 150,
    disponible: true,
};

console.log("Antes de eliminar:");
console.log(producto);

delete producto.disponible;

console.log("Despues de eliminar:");
console.log(producto);