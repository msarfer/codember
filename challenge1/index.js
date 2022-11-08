import { users } from "./users.js";

const checkInput = (data) => {
    const REQUIRED_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

    const users = data
        .split('\n\n')
        .map((line) => line.replaceAll('\n', ' ').split(' '))
        .map(userInfo => {
            const user = {};
            for (const userField of userInfo) {
                const [key, value] = userField.split(':');
                user[key] = value;
            }
            return user;
        });

    const validUsers = users.filter(user => REQUIRED_FIELDS.every(field => field in user));

    return `submit ${validUsers.length}${validUsers.at(-1).usr}`

}

console.log(checkInput(users))