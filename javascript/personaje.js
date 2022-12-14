class Personaje {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/personajePrincipal.png";
    this.h = 60;
    this.w = 60;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.h;
    if (fps < 70) {
      this.speed = 2.5;
    } else {
      this.speed = 1;
    }
    this.jumpSpeed = 130;
  }
  // metodos
  drawPersonaje = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  saltoPersonaje = () => {
    if (this.y >= 538) {
      this.y = this.y - this.jumpSpeed;
    }
  };

  movimientoPersonaje = (direccion) => {
    if (direccion === "derecha" && this.x < canvas.width - this.w) {
      this.img.src = "./images/personajePrincipal.png";

      this.x = this.x + 35;
    }
    if (direccion === "izquierda" && this.x > 0) {
      this.img.src = "./images/personajePrincipalvoltear.png";
      this.x = this.x - 35;
    }
  };
  gravedadPersonaje = () => {
    if (this.y < 539) {
      this.y = this.y + this.speed;
    }
  };
}
