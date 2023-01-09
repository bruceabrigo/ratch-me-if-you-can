// Create game variables
const game = document.getElementById('canvas')
const displayGame = document.querySelector('canvas')
const startDiv = document.getElementById('startScreen')
document.getElementById('start-game').addEventListener('click', startGame)
const ctx = game.getContext('2d')

// let gameInterval = false
// let setGameInterval = null
// style the canvas height and width

let gameInterval
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
function startGame() {
  console.log('start game!')
  if (!gameInterval) {
    gameInterval = setInterval(gameLoop, 16)
} 
  // clearInterval(gameInterval)

  displayGame.style.display = 'block'
  displayGame.style.margin = 'auto'
  startDiv.style.display = 'none'
}

function endGame () {
  clearInterval(gameInterval)
}


/* ------------------------------------------ Game Characters ------------------------------------------ */
// create class objects for Cat, Mice, Rats, and Mouse Traps.
// lets call the cat BMO (I rlly like Adventure Time)
// Enemy classes were moved to a separate js file.

const bmoImage = new Image()
bmoImage.src = 'js/cat/pngkit_pusheen-cat-png_5427076.png'

class BMO {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
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
      if (key.toLowerCase() == 'w') {this.movement.up = true}
      if (key.toLowerCase() == 'a') {this.movement.left = true}
      if (key.toLowerCase() == 's') {this.movement.down = true}
      if (key.toLowerCase() == 'd') {this.movement.right = true}
    }
    // unsets key events
    this.unsetMovement = function (key) {
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
        if(this.y >= 270) {
          this.y = 270
        }
      }
    }

    this.render = function () {
      ctx.drawImage
      // ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(bmoImage, this.x, this.y, this.width, this.height)
    }
  }
}

const player = new BMO(25, 150, 35, 28)

/* ------------------------------------------ Target Arrays ------------------------------------------ */

// let mouseTimer = 0
// let mouseInterval = 500
// let resetTimer = 0
const miceArray = []
const ratArray = []
const trapArray = []

/* ------------------------------------------ Mice Class ------------------------------------------ */
const mouseImage = new Image()
mouseImage.src = 'targets/mouse.png'

class Mouse {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true;
    this.speed = 3.5
    }

    render () {
      ctx.drawImage
      ctx.drawImage(mouseImage, this.x, this.y, this.width, this.height)

    }

     animateMouse() {
      this.x -= this.speed
    }

    deleteMouse() {
      if (this.x + this.width <= -165) {
        miceArray.forEach(mouse => {
          miceArray.splice(miceArray.indexOf(mouse), 1)
        })
      }
    }

    
  }
  
  /* ---------- Mice Array ---------- */
  function newMice () {

    setInterval(() => {
      for ( let i = 0; i < 1; i++) {
              miceArray.push(new Mouse(600, Math.floor(Math.random() * game.height) - 25, 55, 47))
              }
    }, 2100);

  }

  /* -------------------------------- */


  // create empty array for mouse class
const mouse = new Mouse()

// for loop pushes new Mouse() into miceArray (no greater than 35 mice are generated)

/* ------------------------------------------ Rat Class ------------------------------------------ */
const ratImage = new Image()
ratImage.src = 'targets/rat.png'

class Rat {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true;
    // add this.img
    // give Mouse spawn functionality form right side of canvas

    //  render contents (for now, create a rectangle)
    this.speed = 5.5
    // create movement functionality 
  }


    render () {
      ctx.drawImage
      // ctx.fillStyle = this.color
      ctx.drawImage(ratImage, this.x, this.y, this.width, this.height)
    }

    animateRat() {
      this.x -= this.speed
    }

    deleteRat() {
      if (this.x <= -165) {
        ratArray.forEach(Rat => {
          ratArray.splice(ratArray.indexOf(Rat), 1)
        })
      }
    }


  }

  // create empty array for mouse class
   /* ------------------------------------------ Rat Array ------------------------------------------ */

   function newRats () {

    setInterval(() => {
      for (let i = 0; i < 1; i++) {
        ratArray.push(new Rat(600, Math.floor(Math.random() * game.width) - 25, 50, 36))
      }
    }, 2100)
   }

const rat = new Rat()

/* ------------------------------------------ Enemy Class ------------------------------------------ */
//  mice traps will decrement player health 
const trapImage = new Image()
trapImage.src = 'targets/Rat_trap.webp'

class RatTrap {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.alive = true;
    // add this.img
    // give Mouse spawn functionality form right side of canvas

    //  render contents (for now, create a rectangle)
    this.speed = 3.2
    // create movement functionality 
  }
    render () {
      ctx.drawImage
      ctx.drawImage(trapImage, this.x, this.y, this.width, this.height)
    }

     revealTrap() {
      this.x -= this.speed
    }

    deleteTrap() {
      if (this.x <= -165) {
        trapArray.forEach(trap => {
          trapArray.splice(trapArray.indexOf(trap), 1)
        })
      }
    }
  }

const trap = new RatTrap()

    /* ---------- Mouse Trap Array ---------- */

    function newTrap() {

      setInterval(() => {
        for ( let i = 0; i < 1; i++) {
          trapArray.push(new RatTrap(600, Math.floor(Math.random() * game.height) - 25, 28, 90, 'red'))
        }
      }, 5000)

    }
    
    // move all to one file
    
    
    /* ---------- Collision Detection Baby! ---------- */
    
    const displayScore = document.getElementById('score-counter')
    
    let scoreCounter = 0
    
    const micePoints = (target) => {
      let addMice = 1
      
      if(player.x < target.x + target.width 
        && player.x + player.width > target.x
        && player.y < target.y + target.height
        && player.y + player.height > target.y) {
          miceArray.forEach(mouse => {
            miceArray.splice(miceArray.indexOf(mouse), 1)
          })
          scoreCounter += addMice
          console.log('Current Score - Mouse: ', scoreCounter)
          // target.alive = false
          displayScore.innerText = scoreCounter

          if (scoreCounter >= 25) {
            console.log('You beat the timer!')
            clearInterval(gameInterval)
          }
        }
      }
      /* ---------- RATS! ---------- */
      
      const ratPoints = (target) => {
        let addRat = 2
        
        if(player.x < target.x + target.width 
          && player.x + player.width > target.x
          && player.y < target.y + target.height
          && player.y + player.height > target.y) {
            ratArray.forEach(Rat => {
              ratArray.splice(ratArray.indexOf(Rat), 1)
            })
            scoreCounter += addRat
            console.log('Two POINTS brotha!')

            if (scoreCounter >= 25) {
              console.log('You beat the timer!')
              clearInterval(gameInterval)
            }
            // target.alive = false
            displayScore.innerText = scoreCounter
          }
        }
        /* ---------- OUCH! ---------- */
        
        const theseHurt = (target) => {
          if(player.x < target.x + target.width 
            && player.x + player.width > target.x
            && player.y < target.y + target.height
            && player.y + player.height > target.y) {
              trapArray.forEach(trap => {
                trapArray.splice(trapArray.indexOf(trap), 1)
              })
              console.log('Owie! That hurt')

              clearInterval(gameInterval)

              
              // target.alive = false
              
            }
          }

          /* ------------------------------------------ Start Screen! ------------------------------------------ */

          
          /* ------------------------------------------ Game Loop! ------------------------------------------ */
          
          function gameLoop () {  
            // add a setTimeout
            /* --- Foh da Character!--- */
            ctx.clearRect(0, 0, game.width, game.height)
            player.render()
            player.moveCat()
            mouse.animateMouse()
            // mouse.newMice()
            /* --- Collision Detection --- */
            if (mouse.alive) {
              miceArray.forEach((mouse) => { 
                mouse.render() 
                mouse.animateMouse()
                mouse.deleteMouse()
                micePoints(mouse)
              })
              
            }
            
            if (trap.alive) {
              trapArray.forEach((trap) => {
                trap.render()
                trap.revealTrap()
                trap.deleteTrap()
                theseHurt(trap)
              })
            }
        
            if (rat.alive) {
              ratArray.forEach((rat) => {
                rat.render()
                rat.animateRat()
                rat.deleteRat()
                ratPoints(rat)
              })
            }
            
            let frameCounter = 0
            frameCounter += 1
            console.log('FPS: ', frameCounter)

          }       
          // gameInterval = setInterval(gameLoop, 16)
          /* ------------------------------------------ End Game Conditions! ------------------------------------------ */
          console.log(scoreCounter)

          
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

newMice()
newRats()
newTrap()