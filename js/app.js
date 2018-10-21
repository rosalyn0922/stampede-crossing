
let allEnemies = []
let player = {}

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
