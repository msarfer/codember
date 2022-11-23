export const zebraLights = (colors) => {
  let maxZebra = 1
  let lastColorZebra = colors[0]

  colors.map((_, index) => {
    let counter = 1

    if (colors[index] === colors[index + 1]) return null
    else counter++

    while (colors[index + counter] === colors[index + counter - 2]) {
      counter++
    }

    if (counter > maxZebra) {
      maxZebra = counter
      lastColorZebra = colors[index + counter - 1]
    }

    return null
  })

  return `submit ${maxZebra}@${lastColorZebra}`
}
