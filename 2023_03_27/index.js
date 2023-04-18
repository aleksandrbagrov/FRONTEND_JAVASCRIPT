import express from 'express';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';
import session from 'express-session';
// import { auth } from './middleware/auth.js'
// import multer from 'multer';

const app = express();
const file = './database.json';

app.use(session({
    secret: 'LABAI SLAPTA FRAZĖ',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

//Konfigūracinė eilutė kuri yra būtina norint POST metodu priimti duomenis
app.use(express.urlencoded({
    extended: true
}));

//handlebars konfigūracija
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', async (req, res) => {

    res.render('mainpage');
});

//Prisijungimo forma
app.get('/login', (req, res) => {
    res.render('login');
});

// //Prisijungimo duomenų tikrinimas
// app.post('/login', async (req, res) => {
//     let data = JSON.parse(await fs.readFile(file, 'utf-8'));

//     const index = data.findIndex(user => user.email === req.body.email && user.password === req.body.password);
//     if(index != -1) {
//         req.session.loggedIn = true;
//         req.session.user = {
//             id: index,
//             name: data[index].name,
//             last_name: data[index].last_name,
//             email: data[index].email
//         }
//         return res.redirect('/');
//     }

//     res.redirect('/login');
// });

//Viešos erdves vartotojo užklausa
app.get('/non-reg-request', (req, res) => {
    res.render('non-reg-request', {
        user: req.session.user,
        message: req.session.message
    });

    delete req.session.message;
});

app.post('/non-reg-request', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.redirect('http://google.com', { 
        user: req.session.user,
        message: req.session.message
    });

    delete req.session.message;
});


app.listen(3000);