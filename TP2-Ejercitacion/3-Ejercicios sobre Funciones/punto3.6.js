function obtenerPagina(datos, pagina) {
    let inicio = (pagina - 1) * 5;
    let fin = inicio + 5;

    return datos.slice(inicio, fin);
}

let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(obtenerPagina(datos, 2));