let enemy = (function () {
  let name = 'Buggy-Throw'
  let speed = 0

  const displayName = () => {
    return name
  }

  const getSpeed = () => {
    return speed
  }

  return {
    name: displayName,
    speed: getSpeed
  }
})()
