class Enemy extends Character {    
  constructor (name, x, y, sprite = 'images/enemy-bug.png') {
    super(name, x, y, sprite)
    this.width = 101 
    this.height = 171
    this.timeSpeed = Date.now()
  }

  checkForCollision() {
    const spaceAdjustmentX = 0
    const spaceAdjustmentY = 0
    if (player.x < this.x + (this.width/2) - spaceAdjustmentX && player.x + (player.width/2) - spaceAdjustmentX > this.x &&
      player.y < this.y + (this.height/2) - spaceAdjustmentY && player.y + (player.height/2) - spaceAdjustmentY > this.y
    ) {
    player.resetPosition()
    player.score = 0
  } 

  }

  update () {    
    var now = Date.now()
    
    this.x += (now - this.timeSpeed) / 1000.0
    this.timeSpeed = now
    this.checkForCollision()
  }
}
