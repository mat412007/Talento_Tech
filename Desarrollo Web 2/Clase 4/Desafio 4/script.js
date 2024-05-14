function sumarProductos(precioUnitario, cantidadDeseada){
    let total = precioUnitario * cantidadDeseada;
    console.log(`El total gastado en el producto es $${total}`);
}

let precio = 500;
let cantidad = prompt('¿Que cantidad deseas? ');
sumarProductos(precio, cantidad);

