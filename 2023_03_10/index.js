import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });

async function getUsersData() {
    const pathToFile = 'users.json';
    const userData = await fs.readFile(pathToFile, 'utf8');
    const users = JSON.parse(userData);
    return users;
}

async function signIn(pathToFile) {
    console.log('\nPlease enter your login and password\n');
    const admLogin = await rl.question('login: ');
    const admPassword = await rl.question('password: ');
    const users = await getUsersData();
    console.log(users);
    // const users = JSON.parse(usersString);
    // console.log(`Users = ${users}`);
    // console.log(typeof users);
    // console.log(users[0].login);
    // const usersArr = users.array.filter(element => {
    //     if(element.login === admLogin && element.password === admPassword) 
    //         return element;
    // });
    // console.log(usersArr);
    if (admLogin === users[0].login && admPassword === users[0].password) {
        // setTimeout(() => {
        //     console.log('\nYou have successfully Signed in the Personal Data Management Tool (PDMT)!\n');
        // }, 2000);
        console.log('\n\x1b[32mYou have successfully Signed in the Personal Data Management Tool (PDMT)!\x1b[0m\n');
        return true;

    } else {
        console.log('\n\n\x1b[31mYour login or password is incorrectly entered.\x1b[0m\n\n');
        return false;
    }
}

async function getRegistration() {
    console.log('\nTo register in the Personal Data Management Tool, please enter a new login and password\n');
    const login = await rl.question('login: ');
    const password = await rl.question('password: ');
    if (login && password) {
        const users = await getUsersData();
        users.push({ "login": login, "password": password });
        console.log('\n\x1b[1;37;42mCongratulation!!\x1b[0m\n');
        console.log('\n\x1b[1;37;42mYou have successfully registered in the Personal Data Management Tool (PDMT)\x1b[0m\n');
        // setTimeout(() => {
        //     console.log('\nCongratulation!!\n');
        //     console.log('\nYou have successfully registered in the Personal Data Management Tool\n');
        // }, 2000);
    } else {
        console.log('\n\n\x1b[1;37;41mError! Login and password cannot be empty strings!\x1b[0m\n\n');
        await getRegistration();
    }
}

async function enterToSystem() {
    const signing = await rl.question('\x1b[1;37;41mS\x1b[0mign In / \x1b[1;37;46mR\x1b[0megistration / \x1b[1;37;42mQ\x1b[0muit  (\x1b[4;31ms\x1b[0m/\x1b[4;36mr\x1b[0m/\x1b[4;32mq\x1b[0m):  ');
    switch (signing) {
        case 's':
            return await signIn();
        case 'r':
            await getRegistration();
            return await signIn();
        case 'q':
            // setTimeout(() => {
            //     console.log('\nBye! Bye!\n');
            //     rl.close();
            // }, 2000);
            console.log('\n\x1b[1;37;44mBye! Bye!\x1b[0m\n');
            rl.close();
            break;
        default:
            console.log('\n\n\x1b[1;37;41mPlease enter correct answer!\x1b[0m\n\n');
            break;
    }
}

async function addData(pathToFile) {
    const name = faker.name.firstName();
    const lastname = faker.name.lastName();
    const password = faker.internet.password();
    const eMail = faker.internet.email(name, lastname);
    const birthdate = faker.date.birthdate(name, lastname);
    const birthday = new Date(birthdate);
    const birthdayLT = birthday.toLocaleDateString('lt-LT');
    const person = `${name}, ${lastname}, ${password}, ${eMail}, ${birthdayLT}\n`;
    await fs.appendFile(pathToFile, person);



    // const myPromise = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, 2000);
    // });

    // await myPromise.then((name, lastname, password, eMail, birthdate) => {
    //     console.log('\n\n\x1b[0;35mUser data:\n');
    //     console.log('\x1b[1;34mFirst Name:  \x1b[1;31m',name,'\x1b[0m');
    //     console.log('\x1b[1;34mLast Name:  \x1b[1;31m',lastname,'\x1b[0m');
    //     console.log(`\x1b[1;34mPassword: \x1b[1;31m${password}\x1b[0m`);
    //     console.log(`\x1b[1;34mE-mail: \x1b[1;31m${eMail}\x1b[0m`);
    //     console.log(`\x1b[1;34mBirth Date: \x1b[1;31m${birthdate}\x1b[0m\n`);
    //     console.log(`\x1b[0;35mwas successfully added to the database ${pathToFile}\x1b[0m\n`);
    // });

}

async function addCustomData(pathToFile) {

}

async function readData(pathToFile) {
    const file = await fs.readFile(pathToFile, 'utf8');
    return file;
}

async function mainTask(pathToFile) {
    async function inner() {
        console.log('\n\x1b[1;34mWhat do you want to do with the database?\x1b[0m\n')
        const task = await rl.question('\x1b[1;34mA\x1b[0mdd random user to the database / Add \x1b[1;32mC\x1b[0mustom user to the database / \x1b[1;33mV\x1b[0miew the database / \x1b[1;31mQ\x1b[0muit (\x1b[1;34mA\x1b[0m / \x1b[1;32mC\x1b[0m / \x1b[1;33mV\x1b[0m / \x1b[1;31mQ\x1b[0m):  ');
        switch (task) {
            case 'A':
                await addData(pathToFile);
                break;
            case 'C':
                await addCustomData(pathToFile);
            case 'V':
                const file = await readData(pathToFile);
                console.log(file);
                break;
            case 'Q':
                console.log('\n\n\x1b[1;37;41mThe task has been cancelled\x1b[0m\n\n');
                console.log('\n\x1b[1;37;44mBye! Bye!\x1b[0m\n');
                rl.close();
                return;
            default:
                console.log('\n\x1b[1;37;41mPlease enter correct answer\x1b[0m\n');
                break;

        }
        await inner();
    }
    await inner();
}

async function pdmt() {
    const databaseName = 'person.txt';
    let registration = false;
    console.log('\n\n\x1b[1;35;44mWelcome to Personal Data Management Tool (PDMT)!\x1b[0m\n');
    console.log('\nTo access the PDMT, enter your login and password or register as a new user\n');
    while (!registration) {
        try {
            registration = await enterToSystem();
        } catch {
            console.log('\n\n\x1b[1;37;41mLogin has been interrupted\x1b[0m\n\n');
            return;
        }
    }

    mainTask(databaseName);
}

pdmt();
