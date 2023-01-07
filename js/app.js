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


/* ------------------------------------------ Start Game ------------------------------------------ */

// create function that loads Canvas after Start Game button is pressed
// while start game/h2p screen is displayed, gameRunning should be false
// while star game button is pressed, gameRunning should be true and display canvas


/* ------------------------------------------ Game Characters ------------------------------------------ */
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
      // ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(bmoImage, this.x, this.y, this.width, this.height)
    }
  }
}


/* ------------------------------------------ Target Arrays ------------------------------------------ */

// let mouseTimer = 0
// let mouseInterval = 500
// let resetTimer = 0
const miceArray = []

/* ------------------------------------------ Mice Class ------------------------------------------ */
const mouseImage = new Image()
mouseImage.src = 'targets/mouse.png'
class Mouse {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    this.speed = 4
    }


    render () {
      ctx.drawImage
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(mouseImage, this.x, this.y, this.width, this.height)

    }


     animateMouse() {
      this.x -= this.speed

      if(this.x <= -150) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10
        for (let i; miceArray.length; i++) {
          miceArray.splice([i], 1)
        }
      }
    }

    
  }
  
  /* ---------- Mice Class ---------- */
  function newMice () {

    // 
    setInterval(() => {
      let randmicer = Math.ceil(Math.random() * 35);
      for( let i = 0; i < randmicer; i++) {
              miceArray.push(new Mouse(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'purple'))
              // miceArray[index++ %  miceArray.length]
              console.log('mice attack')
              }
}, 1000);

   console.log()
 }

  /* -------------------------------- */


  // create empty array for mouse class
const mouse = new Mouse(600, Math.floor(Math.random() * game.height) - 25, 55, 47, 'purple')

// for loop pushes new Mouse() into miceArray (no greater than 35 mice are generated)

/* ------------------------------------------ Rat Class ------------------------------------------ */
class Rat {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    // add this.img
    // give Mouse spawn functionality form right side of canvas

    //  render contents (for now, create a rectangle)
    this.speed = 5.5
    // create movement functionality 
  }
    render () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    /* ------------------------------------------ Rat Class ------------------------------------------ */

     animateMouse() {
      this.x -= this.speed

      if(this.x <= -165) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10

      }
    }
  }

  // create empty array for mouse class

const rat = new Rat(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'pink')

/* ------------------------------------------ Enemy Class ------------------------------------------ */
//  mice traps will decrement player health 
class RatTrap {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true;
    // add this.img
    // give Mouse spawn functionality form right side of canvas

    //  render contents (for now, create a rectangle)
    this.speed = 3.2
    // create movement functionality 
  }
    render () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

     revealTrap() {
      this.x -= this.speed

      if(this.x <= -155) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10
      }
    }
  }



  // create empty array for mouse class

const trap = new RatTrap(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'red')

// create separate loops for enemy and target classes
newMice()

// move all to one file

/* ------------------------------------------ Timer ------------------------------------------ */
let index = 0
setInterval(function() {
  console.log()
  // if(index == miceArray.length) {
  //   clearInterval(interval)
  // }
}, 60)


/* ------------------------------------------ Game Loop! ------------------------------------------ */

function gameLoop () {  


  // miceArray.forEach(mice => console.log(mice))
  // add a setTimeout
  /* --- Foh da Character!--- */
  ctx.clearRect(0, 0, game.width, game.height)
  player.render()
  player.moveCat()
  mouse.render()
  mouse.animateMouse()
  // mouse.newMice()
  rat.render()
  rat.animateMouse()
  trap.render()
  trap.revealTrap()
  /* --- Collision Detection --- */
  if(mouse.alive) {
    miceArray.forEach((mouse, i) => { 
      mouse.render() 
      mouse.animateMouse()
    })
    micePoints(mouse)
    ratPoints(rat)
    theseHurt(trap)
  }
}

const gameInterval = setInterval(gameLoop, 16)


const player = new BMO(25, 150, 45, 45, 'white')

/* ---------- Calls and Such ---------- */
// call gameLoop and setInterval

document.addEventListener('keydown', (e) => {
  player.setMovement(e.key)
})
// add event lister for a keyUp event

document.addEventListener('keyup', (e) => {
  if (['w', 'a', 's', 'd'].includes(e.key)) {
    player.unsetMovement(e.key)
  }
})

