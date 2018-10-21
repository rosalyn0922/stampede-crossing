(function () {
  let lastTime

  function main () {
    let now = Date.now()
    let dt = (now - lastTime) / 1000.0

    for (const bug of allEnemies) {
      bug.x = dt
      bug.render()
    }

    lastTime = now

    window.requestAnimationFrame(main)
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      window.requestAnimationFrame(main)
    }, 2000)
  })
})()
