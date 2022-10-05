class Cascos {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/cascos.png"; // puedo poner un array de imagenes?
    this.w = 30;
    this.h = 30;
    this.x = 640;
    this.y = 50;
    this.objeto1 = `Airpods: 200$`;
  }
  drawObjeto = () => {
    ctx.font = "15px Arial";
    ctx.fillText(this.objeto1, this.x + 40, this.y + 20);
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
