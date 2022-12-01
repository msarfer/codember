import { checkInput } from './challenge01/index.js'
import { users } from './challenge01/users.js'
import { decryptor } from './challenge02/index.js'
import { message } from './challenge02/message.js'
import { zebraLights } from './challenge03/index.js'
import { colors } from './challenge03/colors.js'
import { possiblePasswords } from './challenge04/index.js'
import { mecenas, killer } from './challenge05/index.js'

const display = (id, func) => {
  console.log(`> Challenge #${id}`)
  console.log(`> ${func}\n`)
}
const CHALLENGES = [
  checkInput(users),
  decryptor(message),
  zebraLights(colors),
  possiblePasswords(11098, 98123, 55),
  killer(mecenas)
]
CHALLENGES.forEach((elem, index) => {
  display(++index, elem)
})
