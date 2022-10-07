class Tienda {
  constructor() {
    this.w = 30;
    this.h = 30;
    this.x = 640;
    this.y = 50;
  }
  drawTienda = () => {
    ctx.font = "30px Arial";
    let tienda = `Tienda: `;
    ctx.fillText(tienda, this.x + 20, this.y - 10);

    ctx.beginPath() // inicia un trazado complejo
    ctx.strokeStyle = "red" // para color de trazado
    ctx.lineWidth = 3 // para cambiar el ancho de la linea
    ctx.moveTo(630, 45) // mover el cursor a donde empezar el trazado
    // (posX, posY)
    ctx.lineTo(780, 45) // a donde va el cursos trazando
    // .. de aqui hacemos más trazados o más movimiendos del cursor
    ctx.lineTo(780, 240)
    ctx.lineTo(630, 240)
    ctx.lineTo(630, 45)

    ctx.stroke() // realiza el trazado hasta este punto

    ctx.fillStyle = "darkgray" // color de relleno
    ctx.fill() // rellena todo el trazado (con el ultimo color de fillStyle)
    ctx.closePath() // aqui termina el trazado

  };
}
