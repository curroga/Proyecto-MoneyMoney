console.log("Probando la consola");

// * GLOBAL VARIABLES
const gameScreen = document.querySelector("#game-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
const resetBtn = document.querySelector("#reset-btn");
const gameWinScreen = document.querySelector("#gamewin-screen");
const volverAjugarBtn = document.querySelector("#volver-btn");
let inputDOM = document.querySelector("#name");
let listDOM = document.querySelector("#output-list");
let marcadorDOM = document.querySelector(".marcador");


let audioP = new Audio();
audioP.src = "./sounds/abba.wav";

let gameObj;

let textToAdd;
let intentos = 1;

// add as global variables
let fps = 0; // will hold the detected FPS 1 second after starting the page. Can be used from within the game.
let testGoing = true


// * STATE MANAGEMENT FUNCTIONS

const detectFPS = () => {
  setTimeout(() => {
    testGoing = false; // to stop recursion frame counter after 1 second.
    console.log("detected FPS", fps)
    // * if starting game with button, unlock button here
  }, 1000)
}

const framesRecursion = () => {
  if (testGoing === true) {
    fps++ // increase FPS until stop at 1 second.
    console.log("counting frames") // remove after testing.
    requestAnimationFrame(framesRecursion)
  }
}

window.addEventListener("load", () => {
  detectFPS()
  framesRecursion()
})


const startGame = () => {
  audioP.play();
  intentos = 1;
  textToAdd = inputDOM.value;
  console.log(textToAdd);
  console.log("iniciando el juego");

  // ocultar la pantalla de inicio
  startScreen.style.display = "none";
  marcadorDOM.style.display = "none"

  // mostrar canvas
  canvas.style.display = "block";

  // iniciará el juego
  gameObj = new Game();
  gameObj.gameLoop();
};

const resetGame = () => {
  intentos++;
  audioP.play();

  console.log("reseteando el juego");

  // ocultar la pantalla de inicio
  gameOverScreen.style.display = "none";
  gameWinScreen.style.display = "none";
  marcadorDOM.style.display = "none"

  // mostrar canvas
  canvas.style.display = "flex";

  // iniciará el juego
  gameObj = new Game();
  gameObj.gameLoop();
};
const volverInicio = () => {
  console.log("volver a inicio");

  // ocultar la pantalla de inicio
  gameOverScreen.style.display = "none";
  gameWinScreen.style.display = "none";

  startScreen.style.display = "flex";
};


startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
volverAjugarBtn.addEventListener("click", volverInicio);

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObj.personajeObj.saltoPersonaje();
  }
  if (event.code === "KeyD") {
    gameObj.personajeObj.movimientoPersonaje("derecha");
  }
  if (event.code === "KeyA") {
    gameObj.personajeObj.movimientoPersonaje("izquierda");
  }
});
