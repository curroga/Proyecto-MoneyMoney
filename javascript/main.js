console.log("Probando la consola")

// * GLOBAL VARIABLES
const gameScreen = document.querySelector("#game-screen")
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const startScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")
const gameOverScreen = document.querySelector("#gameover-screen")
const resetBtn = document.querySelector("#reset-btn")
const gameWinScreen = document.querySelector("#gamewin-screen")
const volverAjugarBtn = document.querySelector("#volver-btn")
let inputDOM = document.querySelector("#name")
let addButtonDOM = document.querySelector("#añadir-usuario")
let listDOM = document.querySelector("#output-list")

let audioP = new Audio()
audioP.src = "./sounds/abba.wav"

let gameObj;

let textToAdd;
let intentos=1;

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  audioP.play()
  intentos = 1
  console.log("iniciando el juego")

  // ocultar la pantalla de inicio
  startScreen.style.display = "none"

  // mostrar canvas
  canvas.style.display = "block"  

  // iniciará el juego
  gameObj = new Game()
  gameObj.gameLoop()

}

const resetGame = () => {
  intentos ++
  console.log("reseteando el juego")

  // ocultar la pantalla de inicio
  gameOverScreen.style.display = "none"
  gameWinScreen.style.display = "none"

  // mostrar canvas
  canvas.style.display = "flex"
  
  
  // iniciará el juego
  gameObj = new Game()
  gameObj.gameLoop()

}
const volverInicio = () => {
  console.log("volver a inicio")

  // ocultar la pantalla de inicio
  gameOverScreen.style.display = "none"
  gameWinScreen.style.display = "none"

  startScreen.style.display = "flex"   

}
function addUser(){

  // 1. extraer lo que vamos a agregar
  textToAdd = inputDOM.value
  console.log(textToAdd)

}



// * ADD EVENT LISTERNERS
addButtonDOM.addEventListener("click", addUser)

startBtn.addEventListener("click", startGame)
resetBtn.addEventListener("click", resetGame)
volverAjugarBtn.addEventListener("click", volverInicio)

window.addEventListener("keydown", (event) => {
  if(event.code === "Space"){
    gameObj.personajeObj.saltoPersonaje()
  }
  if(event.code === "KeyD"){
    gameObj.personajeObj.movimientoPersonaje("derecha")
  }
  if(event.code === "KeyA"){
    gameObj.personajeObj.movimientoPersonaje("izquierda")
  }
})