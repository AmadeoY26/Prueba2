function buscarRegalo(lista, regaloBuscado, indice = 0) {
    // Caso base 1: Llegamos al final de la lista sin encontrar el regalo
    if (indice >= lista.length) {
        return {
            encontrado: false,
            mensaje: ` ¡Oh no! "${regaloBuscado}" no está en tu lista de regalos. ¡Santa no lo trajo este año!`,
            posicion: -1
        };
    }
    
    // Caso base 2: Encontramos el regalo
    if (lista[indice] === regaloBuscado) {
        return {
            encontrado: true,
            mensaje: ' ¡Feliz Navidad! Encontré "${regaloBuscado}" en la posición ${indice + 1} de tu lista.`,
            posicion: indice
        };
    }
    
    // Paso recursivo: Buscar en el siguiente elemento
    console.log(` Buscando en posición ${indice + 1}: "${lista[indice]}"... No es el regalo.`);
    return buscarRegalo(lista, regaloBuscado, indice + 1);
}

//  Lista de regalos navideños
const listaDeRegalos = [
    "bicicleta",
    "videojuego",
    "libro de programación", 
    "audífonos",
    "chocolate",
    "suéter navideño",
    "drone",
    "patines",
    "tablet",
    "calcetines de Star Wars"
];

// Ejemplos de búsqueda
console.log(" BUSCADOR DE REGALOS NAVIDEÑOS \n");

const resultado1 = buscarRegalo(listaDeRegalos, "drone");
console.log(resultado1.mensaje);

console.log("\n" + "=".repeat(50) + "\n");

const resultado2 = buscarRegalo(listaDeRegalos, "pony");
console.log(resultado2.mensaje);
