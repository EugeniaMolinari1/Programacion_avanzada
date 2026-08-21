async function enviarDatos(data) {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let resultado = await respuesta.json();

    console.log(resultado);
}

let datos = {
    title: "Hola",
    body: "Este es un ejemplo",
    userId: 1
};

enviarDatos(datos);