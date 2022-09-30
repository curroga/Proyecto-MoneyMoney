class Personaje {

  constructor(){
    this.img = new Image()
    this.img.src = "./images/enemigo.png"
    this.h = 60; 
    this.w = 50; 
    this.x = canvas.width/2; 
    this.y = canvas.height - this.h; 
    this.speed = 0.5;
    this.jumpSpeed = 120;

  }
  // metodos
  drawPersonaje = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  saltoPersonaje = () => {
    this.y = this.y - this.jumpSpeed
  }

  movimientoPersonaje = (direccion) => {
    if(direccion === "derecha"){
      this.x = this.x + 20
    }
    if(direccion === "izquierda"){
      this.x = this.x - 20
    }

  }
  gravedadPersonaje = () => {
    if (this.y < 539) {
      console.log(this.y) 
      this.y = this.y + this.speed
    
   } 
  }
}

  

