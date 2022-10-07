# MONEY MONEY


## [See the Game](www.your-url-here.com)
NOTE: above link will be added later

# Description

El juego consiste en ir recogiendo todo el dinero posible, algunos billetes serán falsos y otros valdrán el doble. Mientras vas recogiendo el dinero, tendrás que ir sorteando obstáculos.
El juego terminará cuando compres todos los objetos de la tienda o en su defecto cuando un obstáculo te toca, aunque en este último caso tendrás la opción de reiniciar el juego si te toca el obstáculo


# Main Functionalities

- Detectar FPS
- Empezar el juego
- Resetear el juego
- Volver a la pantalla de Inicio
- Asignar teclas para movimientos

# Backlog Functionalities

- Movimiento del personaje
- Movimiento de los obstaculos
- Colision con los obstaculos
- Movimieto del dinero
- Crear una lista
- Game over
- Game win
- Contar dinero recogido
- Quitar objetos
- Dibujar personaje, enemigos, obstaculos

# Proyect Structure 

## main.js

- startGame()
- resetGame()
- volverInicio()
- detectFPS()
- framesRecursion()

## game.js

- Game () {
    this.personajeObj;
    this.enemigoObjs;
    this.enemigosIzquierdaObj;
    this.dineroObj;
    this.relojObj;
    this.cascosObj;
    this.tabletObj;
    this.pcObj;
    this.tiendaObj;
}
- gameLoop () {}
- collision () {}
- gameOver () {}
- gameWin () {}
- crearLista () {}
- contarDinero () {}
- quitarObjetos () {}
- drawFondo () {}
- drawScore () {}
- addEnemigos () {}

## persojaje.js 

- Personaje () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;
    if(fps<70){
      this.speed;
      } else{
        this.speed;
      }
    this.jumpSpeed;
}
- drawPersonaje () {}
- movimientoPersonaje () {}
- saltoPersonaje () {}
- gravedadPersonaje () {}

## enemigos.js 

- Enemigos () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;
    if(fps<70){
      this.speed;
      } else{
        this.speed;
      }
}
- drawEnemigos () {}
- movEnemigos () {}
## enemigosIzquierda.js 

- EnemigosIzquierda () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;
    if(fps<70){
      this.speed;
      } else{
        this.speed;
      }
}
- drawEnemigos () {}
- movEnemigos () {}

## dinero.js 

- Dinero () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;
    if(fps<70){
      this.speed;
      } else{
        this.speed;
      }
}
- drawDinero () {}
- movDinero () {}

## tienda.js 

- Tienda () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;   
}
- drawTienda () {}

## reloj.js 

- Reloj () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;   
}
- drawObjeto () {}

## tablet.js 

- Tablet () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;   
}
- drawObjeto () {}

## airpods.js 

- Cascos () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;   
}
- drawObjeto () {}

## pc.js 

- Pc () {
    this.img;
    this.w;
    this.h;
    this.x;
    this.y;   
}
- drawObjeto () {}

# States and Transitions

- SPLASH SCREEN
- GAME SCREEN
- GAME OVER SCREEN
- GAME WIN SCREEN


# Extra Links (The links can be added later when available)

### gitHub
[Link] https://curroga.github.io/Proyecto-MoneyMoney/

### Slides
[Link]                       
