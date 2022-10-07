class Pc {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/pc.png"; // puedo poner un array de imagenes?
    this.w = 30;
    this.h = 30;
    this.x = 640;
    this.y = 50;
    this.objeto1 = `Pc: 1000$`;
  }
  drawObjeto = () => {
    ctx.font = "15px Moderat";
    ctx.fillStyle = "black";

    ctx.fillText(this.objeto1, this.x + 40, this.y + 170);
    ctx.drawImage(this.img, this.x, this.y + 150, this.w, this.h);
  };
}
