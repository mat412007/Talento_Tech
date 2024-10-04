/* Repaso de JavaScript */

// Variables
var numeroMagico = 7; // ¡Evita usar var!
let miEdad = 16;
const pi = 3.14;

// Funciones
function sumar(a, b) {
    return a + b;
}
const resta = (a, b) => a - b;

// Objetos
let coche = {
    color: "rojo",
    modelo: "Tesla",
    estado: "nuevo"
};
// Notacion de punto
console.log(coche.color);
// Notacion de corchetes
console.log(coche["estado"]);

// Arrays
let frutas = ['manzana', 'banana', 'uva'];
// Indices numericos
console.log(frutas[1]); // Imprime: banana
console.log(frutas.length); // Imprime: 3
console.log(frutas[0].length) // Imprime: 7

// Condiciones
let clima = "soleado";
if (clima === "lluvioso") {
    llevarParaguas();
} else if(clima === "nublado"){
    ponerAbrigo();
} else{
    llevarParaguas();
}

// Bucles
let contador = 0;
while(contador < 5){
    console.log("While: " + contador);
}
for (let i = 0; i < 5; i++) {
    hacerTarea(i);
}