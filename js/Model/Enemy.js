class Enemy extends Character {    
  constructor (name, x, y, sprite = 'images/enemy-bug.png') {
    super(name, x, y, sprite)
    this.width = 101 
    this.height = 171
  }

  checkForCollision() {
    const spaceAdjustmentX = 0
    const spaceAdjustmentY = 0
    if (player.x < this.x + (this.width/2) - spaceAdjustmentX && player.x + (player.width/2) - spaceAdjustmentX > this.x &&
      player.y < this.y + (this.height/2) - spaceAdjustmentY && player.y + (player.height/2) - spaceAdjustmentY > this.y
    ) {
    player.resetPosition()
  } 

  }

  update () {    
    this.x += 10
    this.checkForCollision()
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