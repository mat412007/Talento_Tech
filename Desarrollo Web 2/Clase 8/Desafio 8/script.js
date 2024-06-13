let productos = ['Celulares', 'Tablets', 'Televisiones', 'Microondas', 'Heladeas', 'Hornos', 'Lamparas'];

let header;
for(let i = 0; i < productos.length; i++){
    header = document.createElement("h2");
    header.innerHTML = `${i+1}- ${productos[i]}`;
    document.body.appendChild(header);
}