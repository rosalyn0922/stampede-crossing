let player = (function () {
  let name = ''
  let character = ''

  const getName = () => {
    return name
  }

  const getCharacter = () => {
    return character
  }

  const setCharacter = (charLocation) => {
    character = charLocation
  }

  return {
    name: getName,
    character: getCharacter,
    setCharacter
  }
})()
