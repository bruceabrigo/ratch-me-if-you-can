// Create enemy classes
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

/* ---------- This Code Runs ---------- */
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

    x = x + 1
    console.log(x)

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

  let xpos = 250
  let animate = setInterval(function(){
    xpos += 1 * 0.05
  }, 10)
  
  const target1 = new Mouse(xpos, 150, 16, 16, 'purple')

/* ---------- New Code ---------- */

// const targetMouse = document.createElement('img');

// // load your images:
// const imagesCount = 0; 
// const enemyImages = [];
// for (let i = 1; i < imagesCount; i++) {
//     const img = new Image();
//     img.src = "./images/enemy_" + i + ".png";
//     enemyImages.push(img);
// }

// const enemyImage1 = new Image();
// enemyImage1.src = 'js/cat/PngItem_4326070.png';
// enemyImages.push(
//   enemyImage1
// );




// const enemies = [];
// class Enemy {
//   constructor(x, y, w, h, speed, img) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.speed = speed;
//     this.img = img;
//   }
//   draw() {
//     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//   }
//   update() {
//     this.x = this.x - this.speed;
//   }
// }
// function spawnEnemies() {
//   setInterval(() => {
//     let w = 30;
//     let h = 30;
//     let x = canvas.width;
//     let y = Math.random() * Math.abs(canvas.height - h);
//     let speed = 0.5;
//     enemies.push(new Enemy(x, y, w, h, speed, 
//       enemyImages[Math.floor(Math.random()*enemyImages.length)]
//     ));
//   }, 3500);
// }
// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   enemies.forEach((enemy) => {
//     enemy.draw();
//     enemy.update();
//   });
// }

// animate();
// spawnEnemies();