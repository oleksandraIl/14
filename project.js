//npm install bcrypt
const bcrypt = require('bcrypt');

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const password = 'mypassword';
const hashedPassword = hashPassword(password);

console.log('захешований пароль:', hashedPassword);

const userInput = 'mypassword';
const isPasswordCorrect = bcrypt.compareSync(userInput, hashedPassword);

console.log('пароль правильний:', isPasswordCorrect);
