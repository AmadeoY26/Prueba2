// Sistema de gestion de lista de compras
const listaDeCompras = {
    productos: [],
    
    // Agregar un producto a la lista
    agregarProducto: function(nombre, cantidad = 1, precio = null) {
        // Validar que el nombre no este vacio
        if (!nombre || nombre.trim() === "") {
            return {
                exito: false,
                mensaje: "Error: El nombre del producto no puede estar vacio"
            };
        }
        
        // Verificar si el producto ya existe
        const productoExistente = this.productos.find(
            p => p.nombre.toLowerCase() === nombre.toLowerCase()
        );
        
        if (productoExistente) {
            // Si existe, actualizar la cantidad
            productoExistente.cantidad += cantidad;
            return {
                exito: true,
                mensaje: `Se actualizo la cantidad de "${nombre}" a ${productoExistente.cantidad}`,
                producto: productoExistente
            };
        }
        
        // Si no existe, agregar nuevo producto
        const nuevoProducto = {
            nombre: nombre.trim(),
            cantidad: cantidad,
            precio: precio,
            agregado: new Date()
        };
        
        this.productos.push(nuevoProducto);
        
        return {
            exito: true,
            mensaje: `"${nombre}" agregado a la lista de compras`,
            producto: nuevoProducto
        };
    },
    
    // Eliminar un producto de la lista
    eliminarProducto: function(nombre) {
        const indice = this.productos.findIndex(
            p => p.nombre.toLowerCase() === nombre.toLowerCase()
        );
        
        if (indice === -1) {
            return {
                exito: false,
                mensaje: `Error: "${nombre}" no se encuentra en la lista`
            };
        }
        
        const productoEliminado = this.productos.splice(indice, 1)[0];
        
        return {
            exito: true,
            mensaje: `"${productoEliminado.nombre}" eliminado de la lista`,
            producto: productoEliminado
        };
    },
    
    // Ver la lista completa
    verLista: function() {
        if (this.productos.length === 0) {
            return {
                productos: [],
                total: 0,
                mensaje: "La lista de compras esta vacia"
            };
        }
        
        const resumen = this.productos.map((producto, index) => ({
            numero: index + 1,
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            precio: producto.precio,
            subtotal: producto.precio ? producto.precio * producto.cantidad : null
        }));
        
        const totalEstimado = resumen.reduce(
            (sum, item) => sum + (item.subtotal || 0), 0
        );
        
        return {
            productos: resumen,
            totalProductos: this.productos.length,
            totalArticulos: this.productos.reduce((sum, p) => sum + p.cantidad, 0),
            totalEstimado: totalEstimado > 0 ? totalEstimado : null,
            mensaje: `Lista de compras: ${this.productos.length} productos diferentes`
        };
    },
    
    // Buscar un producto especifico
    buscarProducto: function(nombre) {
        const producto = this.productos.find(
            p => p.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        
        return producto ? {
            encontrado: true,
            producto: producto
        } : {
            encontrado: false,
            mensaje: `No se encontro "${nombre}" en la lista`
        };
    }
};

// Ejemplo de uso
console.log("=== LISTA DE COMPRAS ===\n");

// Agregar productos
console.log(listaDeCompras.agregarProducto("Leche", 2, 1.50).mensaje);
console.log(listaDeCompras.agregarProducto("Pan", 1, 2.00).mensaje);
console.log(listaDeCompras.agregarProducto("Huevos", 1, 3.50).mensaje);
console.log(listaDeCompras.agregarProducto("Manzanas", 6, 0.50).mensaje);
console.log(listaDeCompras.agregarProducto("Leche", 1, 1.50).mensaje); // Actualiza cantidad

// Ver lista completa
const estadoLista = listaDeCompras.verLista();
console.log("\n" + estadoLista.mensaje);
estadoLista.productos.forEach(item => {
    let linea = `${item.numero}. ${item.nombre} x${item.cantidad}`;
    if (item.precio) {
        linea += ` - $${item.precio} c/u = $${item.subtotal}`;
    }
    console.log(linea);
});

if (estadoLista.totalEstimado) {
    console.log(`\nTotal estimado: $${estadoLista.totalEstimado}`);
}

// Eliminar un producto
console.log("\n" + listaDeCompras.eliminarProducto("Pan").mensaje);

// Ver lista actualizada
const listaActualizada = listaDeCompras.verLista();
console.log("\nLista actualizada:");
listaActualizada.productos.forEach(item => {
    console.log(`${item.numero}. ${item.nombre} x${item.cantidad}`);
});
