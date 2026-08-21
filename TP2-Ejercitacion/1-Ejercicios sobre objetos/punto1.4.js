const producto = {
    nombre: "Coca-Cola",
    precio: 150,
    disponible: true,
};

for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}
