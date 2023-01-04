//Create enemy classes
// Spawn enemies from left to right
// final game will simulate characters from top down POV

// class Targets {
//   constructor(game) {
//     this.game = game
//     this.x = this.game.width
//     this.speedX = Math.random() * -1.5 - 0.5
    
//   }
//   update() {
//     this.x += this.speed
//     if ( this.x + this.width < 0) 
//   }
//   draw(context) {
//     context.fillStyle = 'red'
//     context.fillRect(this.x, this.y, this.width, this.height)
//   }
// }

// class Mouse2 {
//   constructor(game) {
//     super(game)
//     this.width = 228 
//     this.height = 169
//     this.y = Math.random() * (this.game.height * 0.9 - this.height)
//   }
// }
let gameRunning = true

class Mouse {
  constructor(x, y, width, height, color, speed) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    // give Mouse spawn functionality form right side of canvas

    //  render contents (for now, create a rectangle)
    this.speed = 5
    // create movement functionality 

    this.dx = 1 * this.speed
    


    this.render = function () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    this.generateMice = function () {
      if (gameRunning == 'true') {
        this.x -= this.speed

        if(this.x <= 0) {
          this.x = 0
        }
      }

    }
  }
}


  const getRandomCoordinates = (max) => {
    //well use math.random to produce a random number
    return Math.floor(Math.random()* max)
  }

  const target1 = new Mouse(150, 150, 16, 16, 'purple')

