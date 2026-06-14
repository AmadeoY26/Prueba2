function encontrarPalabraMasLarga(texto) {
    // Variables para la ventana deslizante
    let inicioVentana = 0;
    let palabraMasLarga = "";
    let longitudMaxima = 0;
    
    // Recorremos el texto caracter por caracter
    for (let finVentana = 0; finVentana <= texto.length; finVentana++) {
        // Cuando encontramos un espacio o llegamos al final, procesamos la palabra
        if (finVentana === texto.length || texto[finVentana] === ' ') {
            // Extraer la palabra actual de la ventana
            const longitudPalabra = finVentana - inicioVentana;
            
            // Si la ventana no está vacía (evitamos espacios múltiples)
            if (longitudPalabra > 0) {
                const palabraActual = texto.substring(inicioVentana, finVentana);
                
                // Actualizar si encontramos una palabra más larga
                if (longitudPalabra > longitudMaxima) {
                    palabraMasLarga = palabraActual;
                    longitudMaxima = longitudPalabra;
                }
            }
            
            // Mover el inicio de la ventana después del espacio
            inicioVentana = finVentana + 1;
        }
    }
    
    return {
        palabra: palabraMasLarga,
        longitud: longitudMaxima
    };
}

// Ejemplo de uso
const parrafo = "El desarrollo de software requiere paciencia y dedicacion constantes";
const resultado = encontrarPalabraMasLarga(parrafo);

console.log(`Texto analizado: "${parrafo}"`);
console.log(`Palabra mas larga: "${resultado.palabra}"`);
console.log(`Longitud: ${resultado.longitud} caracteres`);
