function encontrarMaximo(arr) {
    // Caso base: si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }
    
    // Caso base: si el arreglo tiene dos elementos, compararlos directamente
    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    
    // Dividir: encontrar el punto medio del arreglo
    const medio = Math.floor(arr.length / 2);
    
    // Dividir el arreglo en dos mitades
    const izquierda = arr.slice(0, medio);
    const derecha = arr.slice(medio);
    
    // Conquistar: resolver recursivamente para cada mitad
    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha = encontrarMaximo(derecha);
    
    // Combinar: comparar los máximos de ambas mitades
    return maxIzquierda > maxDerecha ? maxIzquierda : maxDerecha;
}

// Ejemplo de uso
const numeros = [3, 7, 2, 9, 1, 5, 8, 4, 6];
const maximo = encontrarMaximo(numeros);

console.log(`Arreglo original: [${numeros}]`);
console.log(`Número máximo: ${maximo}`);

// Pruebas adicionales
console.log("\n--- Pruebas adicionales ---");
console.log(`Máximo de [10]: ${encontrarMaximo([10])}`);
console.log(`Máximo de [1, 5, 3, 8, 2]: ${encontrarMaximo([1, 5, 3, 8, 2])}`);
console.log(`Máximo de [-1, -5, -3]: ${encontrarMaximo([-1, -5, -3])}`);
console.log(`Máximo de [7, 7, 7]: ${encontrarMaximo([7, 7, 7])}`);
