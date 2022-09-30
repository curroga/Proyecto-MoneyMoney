class Game {
  
  constructor(){
    // fondo
    this.fondo = new Image()
    this.fondo.src = "./images/fondo.png"
    // enemigos
    this.enemigosObj = new Enemigos()
    this.enemigosArr = []
    this.frames = 0
    // personaje
    this.personajeObj = new Personaje()
    // tienda
  }
  //metodos
  // collision del personaje con los obstaculos
  // movimientos de los obstaculos
  
  // dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
  }
  
  // dibujar obstaculos
  // dibujar la tienda

  addEnemigos = () => {
    if (this.frames % 420 === 0){
      let nuevoEnemigo = new Enemigos()
      this.enemigosArr.push(nuevoEnemigo) 
    }
  }
  // ! dudas si añdo los enemigos que salen dentro de addEnemigos me aparareceran a la vez, tendria que crear otra funcion para crear los enemigos de la izquierda?  EN ESE CASO NECESITARIA OTRO ENEMIGO EN OTRA POSICION
  


  gameLoop = () =>{
    this.frames ++
    //console.log("ejecutando el juego") //FUNCIONA

    //1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //2. acciones de movimientos de los elementos
    this.personajeObj.gravedadPersonaje()
    this.enemigosArr.forEach((eachEnemigos) => {
      eachEnemigos.movEnemigos()
    })
    this.addEnemigos()
    this.enemigosObj.movEnemigos()
    

    //3. dibujando los elementos
    this.drawFondo()
    this.personajeObj.drawPersonaje()
    this.enemigosObj.drawEnemigos()
    this.enemigosArr.forEach((eachEnemigos) => {
      eachEnemigos.drawEnemigos()
    })

    //4. control de recursion
    requestAnimationFrame(this.gameLoop)
  }
}