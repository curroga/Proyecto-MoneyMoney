class Enemigos {

  constructor(){
    this.img = new Image()
    this.img.src = "./images/ladron.png"
    this.w = 60
    this.h = 60
    this.x = -50
    this.y = canvas.height - this.h
    this.speed = 1
  
  
  }
  drawEnemigos = () =>{
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    
  }
  movEnemigos = () => {
    this.x = this.x + this.speed
  }
  
}