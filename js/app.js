
let allEnemies = []
let player = {}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  player.handleInput(allowedKeys[e.keyCode])
})

const randomPosX = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

(function () {
  /// Randomize Location and Speed
  allEnemies = [
    new Enemy('Buggy Waggy', 10, 60),
    new Enemy('Joe Bud', 10, 140),
    new Enemy('Carly Dirty', 10, 220)
  ]
  player = new Player('Joe', randomPosX(450), 440)
})()
