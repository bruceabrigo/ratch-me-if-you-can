
/* ---------- Target Arrays ---------- */
const miceArray = []

/* ---------- Target Classes ---------- */
class Mouse {
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
    this.speed = 5
    // create movement functionality 
  }
    render () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

     animateMouse() {
      this.x -= this.speed

      if(this.x <= -20) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10
      }
    }

    miceArmy() {
      for (let i = 0; i < 100; i++) {
        miceArray.push(new Mouse())
      }
    }

    displayMiceArmy () {
      miceArray.forEach(obj => {
        this.render()
        this.animateMouse()
      })
    }
    // create random y position

  }
  // create empty array for mouse class
const target1 = new Mouse(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'purple')

// for loop pushes new Mouse() into miceArray (no greater than 100 mice are generated)

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

     animateMouse() {
      this.x -= this.speed

      if(this.x <= -20) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10
      }
    }
  }

  // create empty array for mouse class

const target2 = new Rat(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'pink')

/* ---------- Enemy Class ---------- */
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
    this.speed = 5.5
    // create movement functionality 
  }
    render () {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

     revealTrap() {
      this.x -= this.speed

      if(this.x <= -20) {
        this.x = 600
        this.y = Math.floor(Math.random() * game.height) - 10
      }
    }
  }

  // create empty array for mouse class

const trap = new RatTrap(600, Math.floor(Math.random() * game.height) - 25, 30, 16, 'red')

// create separate loops for enemy and target classes
