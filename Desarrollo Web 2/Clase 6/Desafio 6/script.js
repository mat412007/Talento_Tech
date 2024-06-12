let producto = {
    nombre: "Camiseta",
    precio: 100,
    cantidadDisponible: 20
}

console.log(producto)

producto.nombre = "Zapatillas";
producto.categoria = "Calzado";
delete producto.cantidadDisponible;

console.log(producto)

