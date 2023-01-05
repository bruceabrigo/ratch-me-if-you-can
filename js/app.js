// Create game variables
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

// style the canvas height and width
game.setAttribute('width', getComputedStyle(game)['width'])
game.width = '600'
game.setAttribute('hieght', getComputedStyle(game)['height'])
game.height = '300'
// create game loop function 
// create startGame function
// create characters
// add hit functions
// add event function


/* ---------- Start Game ---------- */

// create function that loads Canvas after Start Game button is pressed
// while start game/h2p screen is displayed, gameRunning should be false
// while star game button is pressed, gameRunning should be true and display canvas


/* ---------- Game Characters ---------- */
// create class objects for Cat, Mice, Rats, and Mouse Traps.
// lets call the cat BMO (I rlly like Adventure Time)
// Enemy classes were moved to a separate js file.

const bmoImage = new Image()
bmoImage.src = 'js/cat/THE CAT.png'

class BMO {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    //  render contents (for now, create a rectangle)
    this.speed = 4.5
    // create movement functionality 
    this.movement = {
      up: false,
      down: false
    }
    // create key events
    this.setMovement = function (key) {
      console.log('key down', key)
      if (key.toLowerCase() == 'w') {this.movement.up = true}
      if (key.toLowerCase() == 'a') {this.movement.left = true}
      if (key.toLowerCase() == 's') {this.movement.down = true}
      if (key.toLowerCase() == 'd') {this.movement.right = true}
    }
    // unsets key events
    this.unsetMovement = function (key) {
      console.log('key up', key)
      if (key.toLowerCase() == 'w') {this.movement.up = false}
      if (key.toLowerCase() == 'a') {this.movement.left = false}
      if (key.toLowerCase() == 's') {this.movement.down = false}
      if (key.toLowerCase() == 'd') {this.movement.right = false}
    }
    // create function to respond to key events
    this.moveCat = function () {
      // allow player to move up from initialized position 
      if (this.movement.up ) {
        this.y -= this.speed
        if(this.y <= 0) {
          this.y = 0
        }
      }
      // create left and right movements, decrease speed from 20 to allow for slower movement
      // do not allow player to make any contact with right-most border
      if (this.movement.right) {
        this.x += this.speed - 1

        if (this.x >= 425)
        this.x = 425
      }

      if (this.movement.left) {
        this.x -= this.speed - 0.05

        if (this.x <= 0)
        this.x = 0
      }

      if (this.movement.down ) {
        // allow player to move down from initialized position
        this.y += this.speed
        if(this.y >= 285) {
          this.y = 285
        }
      }
    }

    this.render = function () {
      ctx.drawImage
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(bmoImage, this.x, this.y, this.width, this.height)
    }
  }
}




// gameLoop
function gameLoop () {
  //  create keylisteners to allow player movement
  
  // cycle through enemies class
  // generate each enemy
  
  // add all characters to gameLoop
  ctx.clearRect(0, 0, game.width, game.height)
  player.render()
  player.moveCat()
  target1.render()
  target1.animateMouse()
  // target1.displayMiceArmy()
  target2.render()
  target2.animateMouse()
  trap.render()
  trap.revealTrap()
}

const player = new BMO(25, 150, 45, 45, 'white')

/* ---------- Calls and Such ---------- */
// call gameLoop and setInterval
const gameInterval = setInterval(gameLoop, 16)

document.addEventListener('keydown', (e) => {
  player.setMovement(e.key)
})
// add event lister for a keyUp event

document.addEventListener('keyup', (e) => {
  if (['w', 'a', 's', 'd'].includes(e.key)) {
    player.unsetMovement(e.key)
  }
})

