class Dinero {

  constructor (xParam){
    this.img = new Image()
    this.img.src = "./images/dolar.png"
    this.w = 30
    this.h = 30
    this.x = xParam
    this.y = 10
    this.speed = 1
  }
  //metodos
  drawDinero = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  movDinero = () => {
    this.y = this.y + this.speed
  }
}

// ! COMO HACER PARA QUE SALGAN MAS BILLETESS Y CONTROLAR EL RANGO DE SALIDA DE LOS BILLETES
// podria hacerlo con varias condiciones en addEnemmigos?