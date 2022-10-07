class Tienda {
  constructor() {
    this.w = 30;
    this.h = 30;
    this.x = 640;
    this.y = 50;
  }
  drawTienda = (money) => {
    ctx.font = "30px Moderat";
    ctx.fillStyle = "darkred"

    let tienda = `Tienda: `;
    ctx.fillText(tienda, this.x + 20, this.y - 10);
    
    if (money<2){
    ctx.beginPath() // inicia un trazado complejo
    ctx.strokeStyle = "darkblue" // para color de trazado
    ctx.lineWidth = 3 // para cambiar el ancho de la linea
    ctx.moveTo(630, 45) // mover el cursor a donde empezar el trazado
    // (posX, posY)
    ctx.lineTo(780, 45) // a donde va el cursos trazando
    // .. de aqui hacemos más trazados o más movimiendos del cursor
    ctx.lineTo(780, 240)
    ctx.lineTo(630, 240)
    ctx.lineTo(630, 45)

    ctx.stroke() // realiza el trazado hasta este punto

    ctx.fillStyle = "lightgreen" // color de relleno
    ctx.fill() // rellena todo el trazado (con el ultimo color de fillStyle)
    ctx.closePath() // aqui termina el trazado
    }
    else if (money>=2 && money<6){
      ctx.beginPath() 
      ctx.strokeStyle = "darkred" 
      ctx.lineWidth = 3 
      ctx.moveTo(630, 88) 
      
      ctx.lineTo(780, 88) 
      
      ctx.lineTo(780, 240)
      ctx.lineTo(630, 240)
      ctx.lineTo(630, 88)
  
      ctx.stroke() 
  
      ctx.fillStyle = "yellow" 
      ctx.fill() 
      ctx.closePath() 
      }
      else if (money>=6 && money<13){
        ctx.beginPath() 
        ctx.strokeStyle = "darkred" 
        ctx.lineWidth = 3 
        ctx.moveTo(630, 140) 
        
        ctx.lineTo(780, 140) 
        
        ctx.lineTo(780, 240)
        ctx.lineTo(630, 240)
        ctx.lineTo(630, 140)
    
        ctx.stroke() 
    
        ctx.fillStyle = "orange" 
        ctx.fill() 
        ctx.closePath() 
        }
        else if (money>=13 && money<23){
          ctx.beginPath() 
          ctx.strokeStyle = "darkred" 
          ctx.lineWidth = 3 
          ctx.moveTo(630, 188) 
          
          ctx.lineTo(780, 188) 
          
          ctx.lineTo(780, 240)
          ctx.lineTo(630, 240)
          ctx.lineTo(630, 188)
      
          ctx.stroke() 
      
          ctx.fillStyle = "violet" 
          ctx.fill() 
          ctx.closePath() 
          }

  };
}
