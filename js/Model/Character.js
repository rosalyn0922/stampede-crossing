
class Character {
  constructor (name, x, y, sprite) {
    this.name = name && name !== null ? name : 'SuperEntity'
    this.x = x
    this.y = y
    this.sprite = sprite
  }

  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
  }
}
