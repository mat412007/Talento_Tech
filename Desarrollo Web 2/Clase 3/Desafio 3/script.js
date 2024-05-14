let nombreProducto;
let precioUnitario = 500;
let cantidadDeseada = prompt('¿Cuanto deseas comprar? ');
if(cantidadDeseada >= 5){
    alert(`El costo total de su compra sera de ${cantidadDeseada * precioUnitario * 0.9}`);
}
else{
    alert(`El costo total de su compra sera de ${cantidadDeseada * precioUnitario}`);
}
