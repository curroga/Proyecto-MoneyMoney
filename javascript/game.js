class Game {
  
  constructor(){
    // fondo
    this.fondo = new Image()
    this.fondo.src = "./images/fondo.png"
    // enemigos
    this.enemigosObj = new Enemigos()
    this.enemigosArr = []
    this.enemigosIzqObj = new EnemigosIzquierda()
    this.enemigosArrIzq = []

    this.frames = 0
    this.isGameOn = true;
    this.dinero = 0;
    // personaje
    this.personajeObj = new Personaje()
    // dinero
    this.dineroObj = new Dinero()
    this.dineroArr = []
    // tienda
    this.tiendaObj = new Tienda()
    
  }
  //metodos
  // collisiones
  collision = () => {
    this.enemigosArr.forEach((eachEnemigos) => {
      if(
        this.personajeObj.x < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y ){
          console.log("colisision!!")
          //this.gameOver()
        }
    })
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      if(
        this.personajeObj.x < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y ){
          console.log("colisision izquierdas!!")
          //this.gameOver()
          
        }
    })
    this.dineroArr.forEach((eachEnemigos) => {
      if(
        this.personajeObj.x < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y ){
          this.contarDinero()         
          
        }
    })

  }
  gameOver = () => {
    this.isGameOn = false
    canvas.style.display = "none"
    gameOverScreen.style.display = "block"
    
  }
  gameWin = () => {
    this.isGameOn = false
    canvas.style.display = "none"
    gameWinScreen.style.display = "block"
  }
  contarDinero = () => {
    this.dinero ++;
    this.dineroArr.shift()
    console.log(this.dinero)
    console.log(this.tiendaObj.drawTienda.objeto1 = "")
    if(this.dinero >=1){
      this.tiendaObj.drawTienda.objeto1 = ""
    }
    if(this.dinero === 10){
      this.gameWin()
    }
  }
  quitarObjetos = () => {
    if(this.enemigosArr.length !== 0 && this.enemigosArr[0].x > 850){
      this.enemigosArr.shift() // desaperece lado derecho
    }
    if(this.enemigosArrIzq.length !== 0 && this.enemigosArrIzq[0].x < -50){
      this.enemigosArrIzq.shift() // desaperece lado izquierdo
    }
    if(this.dineroArr.length !== 0 && this.dineroArr[0].y > 650){
      this.dineroArr.shift() // desaparece abajo
    }
  }
  
  // dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
  }
  drawScore = () => {
    ctx.font = "30px Arial"
    let scoreStr =`Dinero: ${this.dinero*100}$`
    ctx.fillText(scoreStr, canvas.width * 0.4, 50)
  }
  
  
  // dibujar la tienda


  addEnemigos = () => {
    if(this.frames % 180 === 0){
      let randomNum = Math.random() * 1000 
      let randmXint = Math.floor(randomNum)
      let nuevoDinero = new Dinero(randmXint)
      this.dineroArr.push(nuevoDinero)
    }
    if (this.frames % 420 === 0){
      let nuevoEnemigo = new Enemigos()
      this.enemigosArr.push(nuevoEnemigo) 

    }
    if (this.frames % 480 === 0){
      let nuevoEnemigoIzq = new EnemigosIzquierda()
      this.enemigosArrIzq.push(nuevoEnemigoIzq) 

    }
    
  }
  
  


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
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      eachEnemigos.movEnemigos()
    })
    this.dineroArr.forEach((eachDinero) => {
      eachDinero.movDinero()
    })


    this.addEnemigos()
    this.collision()
    this.quitarObjetos()
    



    //3. dibujando los elementos
    this.drawFondo()
    this.personajeObj.drawPersonaje()

    this.enemigosObj.drawEnemigos()
    this.enemigosArr.forEach((eachEnemigos) => {
      eachEnemigos.drawEnemigos()
    })
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      eachEnemigos.drawEnemigos()
    })

    this.dineroArr.forEach((eachDinero) => {
      eachDinero.drawDinero()
    })
    this.dineroObj.drawDinero()
    this.drawScore()
    this.tiendaObj.drawTienda()




    //4. control de recursion
    if (this.isGameOn === true){
    requestAnimationFrame(this.gameLoop)
    }
  }
}