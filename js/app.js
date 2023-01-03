// Create game variables
const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

// style the canvas height and width
game.setAttribute('width', getComputedStyle(game)['width'])
game.width = '800'
game.setAttribute('hieght', getComputedStyle(game)['height'])
game.height = '450'


// create game loop function 
// create startGame function
// create characters
// add hit functions
// add event function

// startGame creates click event for #start-game
const startGame = () => {
  console.log('start game')
}

// gameLoop
const gameLoop = () => {

}
// call gameLoop and setInterval
const gameInterval = setInterval(gameLoop, 60)