import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';

const app = express();

app.get('/contacts', async (req, res) => {
    const entry = req.query;
    console.log(entry);
    if (JSON.stringify(entry) === '{}') {
        entry.vardas = '';
        entry.pavarde = '';
        entry.zinute = '';
    }
    console.log(entry.vardas);
    if (entry.vardas === '' ||
        entry.pavarde === '' ||
        entry.zinute === '') {
        console.log('inside')
        return res.sendFile(path.resolve('./templates/contact-us.html'));
        };
    try {
        const databaseString = await fs.readFile('./database.json', 'utf-8');
        const databaseArr = JSON.parse(databaseString);
        databaseArr.push(entry);
        await fs.writeFile('./database.json', JSON.stringify(databaseArr));
    } catch {
        await fs.writeFile('./database.json', JSON.stringify([entry]));
    }
    // res.sendFile(path.resolve('./templates/contact-us.html'));
    res.redirect('/notification');
});

app.get('/notification', (req, res) => {
    res.sendFile(path.resolve('./templates/notification.html'));
})

app.listen(3000);