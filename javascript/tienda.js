class Tienda {
  constructor(){
    this.img = new Image ()
    this.img.src = "./images/enemigo.png" // puedo poner un array de imagenes?
    this.w = 30
    this.h = 30
    this.x = 640
    this.y = 50

  }
  drawTienda = () => {
    ctx.font = "30px Arial"
    let tienda = `Tienda: `
    ctx.fillText( tienda, this.x, this.y-10)
    ctx.font = "15px Arial"

    let objeto1 = `Airpods: 100$ `
    ctx.fillText( objeto1, this.x+40, this.y+20)
    let objeto2 = `Funda: 200$`
    ctx.fillText( objeto2, this.x+40, this.y+70)
    let objeto3 = `ipad: 500$`
    ctx.fillText( objeto3, this.x+40, this.y+120)
    let objeto4 = `iphone: 1.000$`
    ctx.fillText( objeto4, this.x+40, this.y+170) 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    ctx.drawImage(this.img, this.x, this.y + 50, this.w, this.h)
    ctx.drawImage(this.img, this.x, this.y + 100, this.w, this.h)
    ctx.drawImage(this.img, this.x, this.y + 150, this.w, this.h)
  }

}