// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Character {
  constructor (name, x, y, sprite = 'images/char-boy.png') {
    super(name, x, y, sprite)
  }

  update () {
    console.log('update')
  }

  handleInput (keys) {
    console.log('input', keys)
  }
}
