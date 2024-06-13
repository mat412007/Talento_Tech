let boton = document.createElement("button");
boton.getAttribute("id");
boton.setAttribute("id", "btnCarrito");
boton.innerHTML = "Agregar titulo";
document.body.appendChild(boton);
let impresiones = 0;
boton.addEventListener("click", function(){
    if(impresiones != 1){
        let titulo = document.createElement("h3");
        titulo.innerHTML = "Titulo del documento";
        document.body.appendChild(titulo);
        impresiones += 1;
    }
});
    