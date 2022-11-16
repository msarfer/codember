import { message } from './message.js'

const decryptor = (text) => {
  const message = text
    .split(' ')
    .map((word) => word.match(/9\d{1}|1\d{2}/g))
    .map((word) => String.fromCharCode(...word))

  return `submit ${message.join(' ')}`
}
console.log(decryptor(message))
