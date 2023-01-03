// Create game variables
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

// style the canvas height and width
game.setAttribute('width', getComputedStyle(game)['width'])
game.width = '500'
game.setAttribute('hieght', getComputedStyle(game)['height'])
game.height = '300'


// create game loop function 
// create startGame function
// create characters
// add hit functions
// add event function

//////////////// Game Characters ////////////////

// create class objects for Cat, Mice, Rats, and Mouse Traps.
// lets call the cat BMO (I rlly like Adventure Time)
class BMO {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    this.render = function () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}

class Mouse {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    this.render = function () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}

class Rat {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    this.render = function () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}

class Trap {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    this.render = function () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}

const player = new BMO(25, 150, 16, 16, 'lightBlue')

// startGame creates click event for #start-game
const startGame = () => {
  console.log('start game')
}

// gameLoop
const gameLoop = () => {

  player.render()
}
// call gameLoop and setInterval
const gameInterval = setInterval(gameLoop, 60)