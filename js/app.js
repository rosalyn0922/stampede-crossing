
let allEnemies = []
let player = {}
// Enemies our player must avoid
let Enemy = function () {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  let sprite = 'images/enemy-bug.png'

  function getSprite () {
    return sprite
  }

  return {
    sprite: getSprite()
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function () {
  let name = 'Joe'
  let characterSprite = 'images/char-boy.png'

  function getName () {
    return name
  }

  function getCharacter () {
    return characterSprite
  }

  function update () {
    console.log('update')
  }

  function handleInput (keys) {
    console.log('input', keys)
  }

  function render () {
    console.log('render')
  }

  return {
    name: getName(),
    character: getCharacter(),
    update,
    handleInput,
    render
  }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

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
});

(function () {
  player = new Player()
})()
