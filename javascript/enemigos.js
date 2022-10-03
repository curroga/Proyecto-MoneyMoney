class Enemigos {

  constructor(){
    this.img = new Image()
    this.img.src = "./images/enemigo.png"
    this.w = 20
    this.h = 60
    this.x = -50
    this.y = canvas.height - this.h
    this.speed = 1
    //! COMO PUEDO HACER PARA CREAR UN NUEVO ENEMIGO (SIN TENER QUE CREAR UNA NUEVA CLASE)PERO ESTA VEZ QUE SE POSICIONE DESDE OTRO SITIO, PARA QUE SALGA DESDE LA IZQUIERDA,HE PENSADO HACERLO CON UNA CONDICION EN EL CONSTRUCTOR o crear nuevas variables para posicionar el nuevo enemigo
  
  }
  drawEnemigos = () =>{
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    
  }
  movEnemigos = () => {
    this.x = this.x + this.speed
  }
  
}