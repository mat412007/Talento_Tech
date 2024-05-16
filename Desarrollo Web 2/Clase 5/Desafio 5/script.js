const productos = ["Carne", "Arroz", "Harina", "Leche"]
console.log("Stock:")
for(let i = 0; i < 4; i++){
    console.log("Producto Nº" + (i + 1) + ": " + productos[i])
}
productos.pop()
console.log("Se vendio un producto")
console.log("Nuevo stock:")
for(let i = 0; i < 3; i++){
    console.log("Producto Nº" + (i + 1) + ": " + productos[i])
}