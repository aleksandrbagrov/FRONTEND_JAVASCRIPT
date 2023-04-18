import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';

const cart = [];

const app = express();

//Konfigūracinė eilutė kuri yra būtina norint POST metodu priimti duomenis
app.use(express.urlencoded({
    extended: true
}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', async (req, res) => {
    // let data = await fs.readFile('./database.json', 'utf-8');
    // data = JSON.parse(data);

    //Šablono iššaukimui naudojamas render() metodas
    res.render('mainpage');
});

app.get('/home', async (req, res) => {
    const dataProdString = await fs.readFile('./databaseProduct.json', 'utf-8');
    const dataProdArr = JSON.parse(dataProdString);
    const meatProd = dataProdArr.filter(product => product.group === 'meat products');
    const milkProd = dataProdArr.filter(product => product.group === 'milk products');
    const breadProd = dataProdArr.filter(product => product.group === 'bread products');
    const chemicalprod = dataProdArr.filter(product => product.group === 'chemical products');
    const quantityMeat = (value) => {
        const quantityMeat = meatProd.filter(item => item.product === value).quntity;
        return quantityMeat;
    };
    console.log(meatProd);

    const request = req.query;
    console.log(request);

    const chooseProduct = (e) => {
        console.log(e.target.value);
    }

    res.render('home', { posts: dataProdArr, meat: meatProd, milk: milkProd, bread: breadProd, chemical: chemicalprod, meatQ: quantityMeat });
});

// app.post('/', async (req, res) => {
//     // let data = await fs.readFile('./database.json', 'utf-8');
//     // data = JSON.parse(data);

//     //Šablono iššaukimui naudojamas render() metodas
//     res.render('home');
// });



app.get('/payment', async (req, res) => {
    // let data = await fs.readFile('./database.json', 'utf-8');
    // data = JSON.parse(data);

    //Šablono iššaukimui naudojamas render() metodas

    const request = req.guery;
    console.log(request);


    res.render('payment');
});



//Norint priimti duomenis POST metodu, kreipiamės į .post() funkciją
app.post('/payment', async (req, res) => {
    // try {
    //     let database = await fs.readFile('./database.json', 'utf-8');
    //     database = JSON.parse(database);
    //     database.push(req.body);
    //     await fs.writeFile('./database.json', JSON.stringify(database));
    // } catch {
    //     await fs.writeFile('./database.json', JSON.stringify([req.body]));
    // }
    const request = req.body;
    console.log(request);
    console.log(req.query)

    res.redirect('payment');
});

app.listen(3000);