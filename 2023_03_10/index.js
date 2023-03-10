import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';



const rl = readline.createInterface({ input, output });


console.log('Please enter your login and password');
const admLogin = await rl.question('login: ');
const admPassword = await rl.question('password: ');

const name = faker.name.fullName();
const password= faker.internet.password();
const eMail = faker.internet.email();
const birthdate = faker.date.birthdate();
const person = `${name},${password},${eMail},${birthdate}\n`;
await fs.appendFile('person.txt', person);

rl.close();

console.log(person);
