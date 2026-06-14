// Datos de ejemplo de la tienda online
const productos = [
    { nombre: "Laptop ThinkPad", precio: 850, categoria: "Electronica" },
    { nombre: "Mouse Inalambrico", precio: 45, categoria: "Accesorios" },
    { nombre: "Teclado Mecanico", precio: 120, categoria: "Accesorios" },
    { nombre: "Monitor 4K", precio: 450, categoria: "Electronica" },
    { nombre: "Auriculares Bluetooth", precio: 80, categoria: "Audio" },
    { nombre: "Webcam HD", precio: 65, categoria: "Accesorios" },
    { nombre: "Tablet Grafica", precio: 300, categoria: "Electronica" },
    { nombre: "Altavoz Portatil", precio: 55, categoria: "Audio" }
];

function gestionarProductosTienda(productos, precioMaximo) {
    // Paso 1: Filtrar productos por precio
    const productosFiltrados = productos.filter(producto => producto.precio <= precioMaximo);
    
    // Paso 2: Ordenar alfabeticamente por nombre
    const productosOrdenados = productosFiltrados.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });
    
    // Paso 3: Extraer solo los nombres
    const listaNombres = productosOrdenados.map(producto => producto.nombre);
    
    // Retornar resultado completo
    return {
        productosFiltrados: productosOrdenados,
        listaNombres: listaNombres,
        totalProductos: listaNombres.length,
        precioMaximoAplicado: precioMaximo
    };
}

// Uso de la funcion
const resultado = gestionarProductosTienda(productos, 200);

console.log("GESTION DE TIENDA ONLINE");
console.log("========================\n");
console.log(`Filtrando productos con precio menor o igual a $${resultado.precioMaximoAplicado}`);
console.log(`\nProductos encontrados: ${resultado.totalProductos}`);
console.log("\nLista de productos disponibles (orden alfabetico):");
resultado.listaNombres.forEach((nombre, index) => {
    const producto = resultado.productosFiltrados[index];
    console.log(`${index + 1}. ${nombre} - $${producto.precio} (${producto.categoria})`);
});
