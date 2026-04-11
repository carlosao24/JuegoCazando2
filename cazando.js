let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

// GATO
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
const VELOCIDAD = 15; 

// COMIDA
let comidaX = 50;
let comidaY = 50;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;



//FUNCION PRINCIPAL
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};

//FUNCION PARA GRAFICAR AL GATO
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
};

//FUNCION PARA GRAFICAR COMIDA
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};


//FUNCION PARA INICIAR EL JUEGO
function iniciarJuego() {
    //GATO CENTRADO
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    //UBICAR COMIDA EN ESQUINA INFERIOR
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTURACOMIDA;

    graficarGato();
    graficarComida();
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
function moverDerecha(){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function moverArriba(){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function moverAbajo(){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}
 
document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();

function detectarColision(){
    if(comidaX + ANCHOCOMIDA > gatoX &&
        comidaX < gatoX + ANCHOGATO &&
        comidaY + ALTURACOMIDA > gatoY &&
        comidaY < gatoY + ALTURAGATO){
        alert("ATRAPADO!!");
    }
} 
