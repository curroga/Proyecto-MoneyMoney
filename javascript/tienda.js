class Tienda {
  constructor(){
    this.w = 30
    this.h = 30
    this.x = 640
    this.y = 50
    

  }
  drawTienda = () => {
    ctx.font = "30px Arial"
    let tienda = `Tienda: `
    ctx.fillText( tienda, this.x+20, this.y-10)  
    
  }  

}