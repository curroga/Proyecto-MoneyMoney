class Tablet {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/ipad.png"; // puedo poner un array de imagenes?
    this.w = 30;
    this.h = 30;
    this.x = 640;
    this.y = 50;
    this.objeto1 = `Tablet: 700$`;
  }
  drawObjeto = () => {
    ctx.font = "15px Moderat";
    ctx.fillStyle = "black"

    ctx.fillText(this.objeto1, this.x + 40, this.y + 120);
    ctx.drawImage(this.img, this.x, this.y + 100, this.w, this.h);
  };
}
