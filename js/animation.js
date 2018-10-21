(function () {
  let lastTime

  function main () {
    const lowerBound = -20
    const upperBound = 520
    const linearSpeed = 50
    let now = Date.now()
    let dt = lastTime && now !== lastTime ? (now - lastTime) / 1000.0 : linearSpeed

    for (const bug of allEnemies) {
      if (bug.x > upperBound) {
        bug.x = lowerBound
      } else {        
        bug.x += (Math.random() * linearSpeed) * (dt + 0.21)
      }
    }

    lastTime = now

    requestAnimationFrame(main)
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      window.requestAnimationFrame(main)
    }, 1000)
  })
})()
