export const message = await fetch('https://codember.dev/encrypted.txt')
  .then(res => res.text())
