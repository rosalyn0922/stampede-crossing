class Enemy extends Character {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  constructor (name, x, y, sprite = 'images/enemy-bug.png') {
    super(name, x, y, sprite)
  }

  update () {
    console.log('Update Enemy')
    this.x += 10
  }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  // var now = Date.now()
  // this.update((now - dt) / 1000.0)
  // this.render()
}
