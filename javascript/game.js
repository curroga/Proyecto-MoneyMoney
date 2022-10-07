class Game {
  constructor() {
    // fondo
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";
    // enemigos
    this.enemigosObj = new Enemigos();
    this.enemigosArr = [];
    this.enemigosIzqObj = new EnemigosIzquierda();
    this.enemigosArrIzq = [];
    this.lose = new Audio();
    this.lose.src = "./sounds/lose.wav";

    this.frames = 0;
    this.isGameOn = true;
    this.dinero = 0;
    // personaje
    this.personajeObj = new Personaje();
    // dinero
    this.dineroObj = new Dinero();
    this.dineroArr = [];
    this.coin = new Audio();
    this.coin.src = "./sounds/coin.wav";
    // tienda
    this.tiendaObj = new Tienda();
    // cascos
    this.cascosObj = new Cascos();
    // reloj
    this.relojObj = new Reloj();
    // tablet
    this.tabletObj = new Tablet();
    // Pc
    this.pcObj = new Pc();
    // Velocidad fps
    if(fps<70){
      this.speed = 2.5;
      } else{
        this.speed = 1
      }
      // contador
      this.contador = 0
      this.contScore =0

  }
  //metodos
  // collisiones
  collision = () => {
    this.enemigosArr.forEach((eachEnemigos) => {
      if (
        this.personajeObj.x + 30 < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x - 30 + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y
      ) {
        console.log("colisision!!");
        this.lose.play();
        this.gameOver();
      }
    });
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      if (
        this.personajeObj.x + 30 < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x - 30 + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y
      ) {
        console.log("colisision izquierdas!!");
        this.gameOver();
        this.lose.play();
      }
    });
    this.dineroArr.forEach((eachEnemigos) => {
      if (
        this.personajeObj.x < eachEnemigos.x + eachEnemigos.w &&
        this.personajeObj.x + this.personajeObj.w > eachEnemigos.x &&
        this.personajeObj.y < eachEnemigos.y + eachEnemigos.h &&
        this.personajeObj.h + this.personajeObj.y > eachEnemigos.y
      ) {
        this.contarDinero();
      }
    });
  };
  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    gameOverScreen.style.display = "block";
    marcadorDOM.style.display = "block"

    this.crearLista();
  };
  crearLista = () => {
    // 2. crear elemento de DOM
    let newElement = document.createElement("li");
    newElement.innerText = `Jugador: ${textToAdd} ====> Dinero: ${this.contScore * 100}$ ====> Intento Nº:${intentos}`;
    console.log(newElement);
    console.log(listDOM);
    // 3. agregar el nuevo elemento a la lista
    listDOM.append(newElement);
    
  };
  gameWin = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    gameWinScreen.style.display = "block";
    marcadorDOM.style.display = "block"
    this.crearLista();
  };
  contarDinero = () => {
    this.dinero++;
    this.contador++
    this.contScore++
    this.coin.play();
    this.dineroArr.shift();
    //console.log(this.dinero); 
    if (this.contador === 2 && this.dinero ===2){
      this.contador = this.contador-2
    }
    if (this.contador === 4 && this.dinero ===6){
      this.contador = this.contador-4
    }
    if (this.contador === 7 && this.dinero ===13){
      this.contador = this.contador-7
    }   
    if (this.dinero === 23) {
      this.gameWin();
    }
  };
  quitarObjetos = () => {
    if (this.enemigosArr.length !== 0 && this.enemigosArr[0].x > 850) {
      this.enemigosArr.shift(); // desaperece lado derecho
    }
    if (this.enemigosArrIzq.length !== 0 && this.enemigosArrIzq[0].x < -50) {
      this.enemigosArrIzq.shift(); // desaperece lado izquierdo
    }
    if (this.dineroArr.length !== 0 && this.dineroArr[0].y > 650) {
      this.dineroArr.shift(); // desaparece abajo
    }
  };

  // dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };
  drawScore = () => {
    ctx.font = "30px Moderat";
    ctx.fillStyle = "darkgreen"

    let scoreStr = `Dinero: ${this.contador * 100}$`;
    ctx.fillText(scoreStr, canvas.width * 0.4, 50);
  };

  // dibujar la tienda

  addEnemigos = () => {
    if (this.frames % (180/this.speed) === 0) {
      let randomNum = Math.random() * 800;
      let randmXint = Math.floor(randomNum);
      let nuevoDinero = new Dinero(randmXint);
      this.dineroArr.push(nuevoDinero);
    }
    if (this.frames % (420/this.speed) === 0) {
      let nuevoEnemigo = new Enemigos();
      this.enemigosArr.push(nuevoEnemigo);
    }
    if (this.frames % (480/this.speed) === 0) {
      let nuevoEnemigoIzq = new EnemigosIzquierda();
      this.enemigosArrIzq.push(nuevoEnemigoIzq);
    }
  };

  gameLoop = () => {
    this.frames++;
    //console.log("ejecutando el juego") //FUNCIONA

    //1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2. acciones de movimientos de los elementos
    this.personajeObj.gravedadPersonaje();
    this.enemigosArr.forEach((eachEnemigos) => {
      eachEnemigos.movEnemigos();
    });
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      eachEnemigos.movEnemigos();
    });
    this.dineroArr.forEach((eachDinero) => {
      eachDinero.movDinero();
    });

    this.addEnemigos();
    this.collision();
    this.quitarObjetos();

    //3. dibujando los elementos
    this.drawFondo();
    this.tiendaObj.drawTienda(this.dinero);
    this.personajeObj.drawPersonaje();

    this.enemigosObj.drawEnemigos();
    this.enemigosArr.forEach((eachEnemigos) => {
      eachEnemigos.drawEnemigos();
    });
    this.enemigosArrIzq.forEach((eachEnemigos) => {
      eachEnemigos.drawEnemigos();
    });

    this.dineroArr.forEach((eachDinero) => {
      eachDinero.drawDinero();
    });
    this.dineroObj.drawDinero();
    this.drawScore();
    if (this.dinero < 2) {
      this.cascosObj.drawObjeto();
    }
    if (this.dinero < 6) {
      this.relojObj.drawObjeto();
    }
    if (this.dinero < 13) {
      this.tabletObj.drawObjeto();
    }
    if (this.dinero < 23) {
      this.pcObj.drawObjeto();
    }

    //4. control de recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
