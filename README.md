# ratch-me-if-you-can
# ratch-me-if-you-can
Ratch me if you can is a game where a house cat tries to collect a high score of mice and rats! The cat belongs to a homeowner whose house is infested with many rodents. Being the homeowner has an ongoing conflict with these rodents, an abondance of mice traps were set through the home. The homeowner purchased a cat in hopes of getting rid of the army of rodents. The house cats' objective is to retrieve as many rodents as possible while also avoiding obstacles!(mice traps) It's GAME-OVER if the cat falls victim to the trap...

------------- User Story -------------

As a user, I want to...
  - Start the game
  - Move the player
  - Collect the rodents
  - Dodge the traps
  - Obtain a high score!

------------- Wireframes -------------

<img width="676" alt="Screen Shot 2022-12-22 at 10 31 30 PM" src="https://user-images.githubusercontent.com/109409601/209271481-3f9033e4-79c0-45df-b15f-50b44e9691f5.png">

Ratch Me If You Can simulates the life of a professional rodent snatcher (the cat) who belongs to a loving bodega owner. The cat must snatch the rats and obtain a high score while simulatneously avoiding the vicious mice traps... DUN! DUN! DUN! The once great biscuit maker (the cat) was hired by the bodege owner in hopes of cutting costs on the food for nothin' mice traps. The cat does not work for free though... More rodents means more TREATS! Get to work, and show the owner who's boss!

------------- Technology Used -------------
- HTML, CSS, JS, CANVAS

<img width="743" alt="Screen Shot 2022-12-22 at 11 01 34 PM" src="https://user-images.githubusercontent.com/109409601/209274155-64774a7e-dc5e-4e76-b26f-1994e83c95ef.png">

<img width="741" alt="Screen Shot 2022-12-22 at 11 04 23 PM" src="https://user-images.githubusercontent.com/109409601/209274418-160d879e-9278-4957-97e3-e3078de75208.png">

<img width="743" alt="Screen Shot 2022-12-22 at 11 14 00 PM" src="https://user-images.githubusercontent.com/109409601/209275376-2d716084-dd11-46a4-8c93-ce3ea3ea9912.png">

<img width="744" alt="Screen Shot 2022-12-22 at 11 37 00 PM" src="https://user-images.githubusercontent.com/109409601/209277699-897f6aa4-08d4-46f2-a2e6-30d55079547a.png">
Green will be rodents, red will be mouse traps. Both will appear at random from top to bottom 

------------- Js Content -------------
//Player objects
class Cat {
 - to hold constructor for coordinates, image, key events, and movement 
}
Class Rat {
 - to hold constructor for coordinates, image, key events, and movement s
}
Class Mouse {
 - to hold constructor for coordinates, image, key events, and movement 
}

 - for object classes ^ I may need seperate function to render each object?

const generateObjects = () => {
 - function to render initial character placement, and generate rodents and obstacles from right to left
 - may need a function per player, rodent, and mouse trap
}

const collisionDetection = () => {
 - function to verify whether player makes content with objective and objstacles
 - this will adjust boolean of rodent characters to be calledback in order to remove them from screen
 - this will also adjust boolean to players living function in order to be calledback to end game if player is to set off collision detection when collding with obstacles
}

const displayField = () => {
function will generate the scene
}

const keyEvents = () => {
function to create event listenrs for key up and down events
}

const showScore = () => {
function to change innerText of score content on the page
}

const highScore = () => {
function to store high scores after each GameOver
}

const gameLoop = () => {
   - creates interval to allow canvas to update whats displayed on screen
}



