const score = document.getElementById('score-counter')

let scoreCounter = 0

/* ---------- Collision Detection Baby! ---------- */
const micePoints = (target) => {
  let addMice = 1

  if(player.x < target.x + target.width 
    && player.x + player.width > target.x
    && player.y < target.y + target.height
    && player.y + player.height > target.y) {
      scoreCounter += addMice
      console.log('WE HIT PURPLE')
      // target.alive = false
    }
}
/* ---------- RATS! ---------- */

const ratPoints = (target) => {
  if(player.x < target.x + target.width 
    && player.x + player.width > target.x
    && player.y < target.y + target.height
    && player.y + player.height > target.y) {
      console.log('Two POINTS brotha!')
      // target.alive = false
      
    }
  }
/* ---------- OUCH! ---------- */

const theseHurt = (target) => {
  if(player.x < target.x + target.width 
    && player.x + player.width > target.x
    && player.y < target.y + target.height
    && player.y + player.height > target.y) {
      console.log('Owie! That hurt')
      // target.alive = false
      
    }
}