let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
const VELOCIDAD = 15; 

// Comida
let comidaX = 50;
let comidaY = 50;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};
 
function iniciarJuego() {
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);
    graficarGato();
    graficarComida();
}
 
function mover(direccion) {
    if (direccion === "arriba") gatoY -= VELOCIDAD;
    if (direccion === "abajo") gatoY += VELOCIDAD;
    if (direccion === "izquierda") gatoX -= VELOCIDAD;
    if (direccion === "derecha") gatoX += VELOCIDAD;
    graficarGato();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}
 
document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => mover("derecha");
 
 
iniciarJuego();