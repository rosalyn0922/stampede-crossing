
class Player extends Character {
  constructor (name, x, y, sprite = 'images/char-boy.png') {
    super(name, x, y, sprite)

    this.score = 0
  }

  update () {
    const score = document.getElementById('playerScore')
    score.textContent = this.score
  }

  resetPosition () {
    this.y = 380
  }

  checkForCollision () {
    for (const bug of allEnemies) {
      if ((this.y + 40) <= bug.y || (this.x + 60) <= this.x) {
        this.resetPosition()
      }
    }
  }

  handleInput (key) {
    const speed = 50
    switch (key) {
      case 'up': {
        if (this.y - speed > -25) {
          this.y -= speed
        }
        break
      }
      case 'down': {
        if (this.y + speed < 422) {
          this.y += speed
        }
        break
      }
      case 'right': {
        if (this.x + speed < 422) {
          this.x += speed
        }
        break
      }
      case 'left': {
        if ((this.x - speed) > -5) {
          this.x -= speed
        }
        break
      }
    }
    if (this.y <= -10) {
      this.resetPosition()
      this.score++
      this.update()
    }
    this.checkForCollision()
    // resets if it hits any of the bugs
    this.render()
  }
}
