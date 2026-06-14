function encontrarParInvitadosMismaLetra(listaInvitados) {
    // Validacion: necesitamos al menos 2 invitados
    if (listaInvitados.length < 2) {
        return {
            encontrado: false,
            mensaje: "Se necesitan al menos 2 invitados para formar un par"
        };
    }
    
    // Inicializar los dos punteros
    let puntero1 = 0;        // Primer invitado del par
    let puntero2 = 1;        // Segundo invitado del par (consecutivo)
    
    // Recorrer la lista con los dos punteros
    while (puntero2 < listaInvitados.length) {
        // Obtener la primera letra de cada invitado
        const primeraLetraInvitado1 = listaInvitados[puntero1][0].toUpperCase();
        const primeraLetraInvitado2 = listaInvitados[puntero2][0].toUpperCase();
        
        // Verificar si comparten la misma letra inicial
        if (primeraLetraInvitado1 === primeraLetraInvitado2) {
            return {
                encontrado: true,
                posicion1: puntero1,
                posicion2: puntero2,
                invitado1: listaInvitados[puntero1],
                invitado2: listaInvitados[puntero2],
                letraInicial: primeraLetraInvitado1,
                mensaje: `Par encontrado: ${listaInvitados[puntero1]} y ${listaInvitados[puntero2]} comparten la letra '${primeraLetraInvitado1}'`
            };
        }
        
        // Avanzar ambos punteros una posicion
        puntero1++;
        puntero2++;
    }
    
    // No se encontro ningun par
    return {
        encontrado: false,
        mensaje: "No se encontro ningun par de invitados consecutivos con la misma letra inicial"
    };
}

// Lista de invitados ordenada alfabeticamente
const invitadosCena = [
    "Ana", "Andres", "Beatriz", "Carlos", 
    "Carmen", "Daniel", "Diana", "Elena",
    "Felipe", "Francisco", "Gabriela", "Hector"
];

const resultado = encontrarParInvitadosMismaLetra(invitadosCena);

console.log("BUSQUEDA DE PARES PARA LA CENA");
console.log("Lista de invitados:", invitadosCena.join(", "));
console.log("\nResultado:", resultado.mensaje);

if (resultado.encontrado) {
    console.log(`Posiciones: ${resultado.posicion1} y ${resultado.posicion2}`);
    console.log(`Se pueden sentar juntos en la mesa`);
}
