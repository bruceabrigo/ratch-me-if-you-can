// /* Create a start screen for game that will initialize loop and start function*/
// Try modal?
// Or use a button that changes canvas from hidden to display 
const displayGame = document.querySelector('canvas')
const startDiv = document.getElementById('startScreen')
document.getElementById('start-game').addEventListener('click', startGame)

function startGame() {
  console.log('start game!')
  displayGame.style.display = 'block'
  displayGame.style.margin = 'auto'
  startDiv.style.display = 'none'
  startBtn.innerText = 'End Game'
}

