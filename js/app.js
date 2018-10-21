
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

const changeAndActivateCharacter = (character) => {
    let  selectedCharacter = ''
    switch (character) {
        case 1: {
            selectedCharacter='char-cat-girl'
            break
        }
        case 2: {
            selectedCharacter='char-horn-girl'
            break    
        }
        case 3: {
            selectedCharacter='char-pink-girl'
            break    
        }
        case 4: {
            selectedCharacter='char-princess-girl'
            break    
        }
        case 5: {
            selectedCharacter='char-boy'
            break
        }
        default:
            selectedCharacter = 'images/char-boy'
            break
    }
    player = new Player('Joe', randomPosX(450), 440, `images/${selectedCharacter}.png`)
}

(function () {
  /// Randomize Location and Speed
  allEnemies = [
    new Enemy('Buggy Waggy', 10, 60),
    new Enemy('Joe Bud', 10, 140),
    new Enemy('Carly Dirty', 10, 220)
  ]
  
  changeAndActivateCharacter(Math.round(Math.random() * 5))
})()
