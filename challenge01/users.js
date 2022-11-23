export const users = await fetch('https://codember.dev/users.txt')
    .then(res => res.text())