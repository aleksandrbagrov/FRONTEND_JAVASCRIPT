import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';

const app = express();

app.get('/contacts', async (req, res) => {
    const entry = req.query;
    console.log(entry);
    try {
        const databaseString = await fs.readFile('./database.json', 'utf-8');
        const databaseArr = JSON.parse(databaseString);
        databaseArr.push(entry);
        await fs.writeFile('./database.json', JSON.stringify(databaseArr));
    } catch {
        await fs.writeFile('./database.json', JSON.stringify([entry]));
    }
    res.sendFile(path.resolve('./templates/contact-us.html'));
});

app.listen(3000);