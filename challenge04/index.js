const arrOfDigits = (i) => Array.from(String(i), Number)

const twiceFives = (pass) => {
  const map = new Map()
  pass.forEach(num => {
    if (map[num]) map[num]++
    else map[num] = 1
  })
  return map[5] >= 2
}

const isIncreasing = (pass) => {
  for (let i = 0; i < pass.length; i++) { if (pass[i] > pass[i + 1]) return false }
  return true
}

export const possiblePasswords = (min, max, index) => {
  let possiblePasswords = 0; let password = ''
  for (let i = min; i <= max; i++) {
    const aux = arrOfDigits(i)
    if (twiceFives(aux) && isIncreasing(aux)) {
      possiblePasswords++
      if (possiblePasswords === index + 1) password = i
    }
  }
  return `submit ${possiblePasswords}-${password}`
}
