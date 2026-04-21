let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

// Agrega esto al inicio de tu JS (cerca de las variables de gatoX y gatoY)
let imagenGato = new Image();
imagenGato.src = "img/gatito.png"; // Asegúrate de que el archivo esté en la misma carpeta

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

let puntos = 0;
let tiempo = 50;
let intervalo = null;


//FUNCION PRINCIPAL
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};

// SUSTITUYE TU FUNCIÓN ACTUAL POR ESTA:
function graficarGato() {
    // drawImage recibe: (imagen, x, y, ancho, alto)
    ctx.drawImage(imagenGato, gatoX, gatoY, ANCHOGATO, ALTURAGATO);
}

//FUNCION PARA GRAFICAR COMIDA
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};


//FUNCION PARA INICIAR EL JUEGO
function iniciarJuego() {
    // GATO CENTRADO
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    // COMIDA INICIAL
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTURACOMIDA;

    puntos = 0;
    tiempo = 15;

    document.getElementById("puntos").textContent = puntos;
    document.getElementById("tiempo").textContent = tiempo;

    imagenGato.onload = function() {
        actualizarPantalla();
    };
    graficarComida();

    // INICIAR CUENTA REGRESIVA
    if(intervalo != null){
        clearInterval(intervalo);
    }
    intervalo = setInterval(restarTiempo, 1000);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX - 20;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    gatoX = gatoX + 20;
    actualizarPantalla();
    detectarColision();
}
function moverArriba(){
    gatoY = gatoY - 20;
    actualizarPantalla();
    detectarColision();
}
function moverAbajo(){
    gatoY = gatoY + 20;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
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

        // SUMAR PUNTO
        puntos++;
        document.getElementById("puntos").textContent = puntos;

        // MOVER COMIDA ALEATORIA
        comidaX = Math.random() * (canvas.width - ANCHOCOMIDA);
        comidaY = Math.random() * (canvas.height - ALTURACOMIDA);
        tiempo = 15;
        actualizarPantalla();

        // CONDICIÓN GANAR
        if(puntos == 1){
            tiempo = 14;
        }else if(puntos == 2){
            tiempo = 13;
        }else if(puntos == 3){
            tiempo = 12;
        }else if(puntos == 4){
            tiempo = 11;
        }else if(puntos == 5){
            tiempo = 10;
        }else if(puntos == 6){
            alert("GANASTE 🎉");
            clearInterval(intervalo);
        }
    }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").textContent = tiempo;
    if(tiempo == 0){
        alert("GAME OVER ⛔");
        clearInterval(intervalo);
    
    }
}
function reiniciarJuego(){
    clearInterval(intervalo);
    iniciarJuego();
    actualizarPantalla();
}


