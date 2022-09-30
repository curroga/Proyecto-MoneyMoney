console.log("Probando la consola")

// * GLOBAL VARIABLES
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")
const startScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")



let gameObj;




// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("iniciando el juego")

  // ocultar la pantalla de inicio
  startScreen.style.display = "none"

  // mostrar canvas
  canvas.style.display = "block"

  // iniciará el juego
  gameObj = new Game()
  gameObj.gameLoop()

}






// * ADD EVENT LISTERNERS
startBtn.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
  if(event.code === "Space"){
    gameObj.personajeObj.saltoPersonaje()
  }
  if(event.code === "ArrowRight"){
    gameObj.personajeObj.movimientoPersonaje("derecha")
  }
  if(event.code === "ArrowLeft"){
    gameObj.personajeObj.movimientoPersonaje("izquierda")
  }
})