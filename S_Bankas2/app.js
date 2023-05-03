import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const app = express();

const port = 3003;

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/clients', (req, res) => {
  const data = readFileSync('./Data/clients.json', 'utf8');
  const clientsData = JSON.parse(data);
  console.log('data', data);
  clientsData?.sort((a, b) => {
    const nameA = a.lname.toUpperCase();
    const nameB = b.lname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  res.json(clientsData);
});

app.post('/clients', (req, res) => {
  const dataString = readFileSync('./Data/clients.json', 'utf8');
  const id = uuidv4();
  console.log('request body', req.body);
  req.body.id = id;
  req.body.balance = +req.body.balance;
  const client = req.body;
  console.log('client', client);
  const data = dataString ? JSON.parse(dataString) : [];
  data.push(client);
  const newDataString = JSON.stringify(data);
  writeFileSync('./Data/clients.json', newDataString);

  res.json(data);
});

app.put('/clients/addfunds/:id', (req, res) => {
  let data = readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);

  data = data.map(client =>
    client.id === req.params.id ? { ...client, balance:  Number((client.balance + Number(req.body.funds)).toFixed(2)) } : { ...client }
  );

  const writtenData = JSON.stringify(data);
  
  writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});

app.put('/clients/subtructfunds/:id', (req, res) => {
  let data = readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);

  data = data.map(client =>
    client.id === req.params.id ? { ...client, balance:  Number((client.balance - Number(req.body.funds)).toFixed(2)) } : { ...client }
  );

  const writtenData = JSON.stringify(data);
  
  writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});

app.delete('/clients/deleteaccount/:id', (req, res) => {
  console.log('req params id', req.params.id);
  console.log('req body id', req.body.id);
  let data = readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);
  data = data.filter(client => client.id !== req.params.id);

  const writtenData = JSON.stringify(data);
  
  writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});



// client.balance + +req.body.funds

// app.put('/clients/:id', (req, res) => {
//   let data = readFileSync('./Data/clients.json', 'utf8');
//   data = JSON.parse(data);

//   data = data.map((c) =>
//     c.id === req.params.id ? { ...c, ...req.body.client, id: req.params.id } : { ...c }
//   );

//   data = JSON.stringify(data);
//   writeFileSync('./Data/clients.json', data);

//   res.json({
//     message: 'ok',
//     promiseId: req.body.promiseId,
//   });
// });

// app.delete('/clients/:id', (req, res) => {
//   let data = readFileSync('./Data/clients.json', 'utf8');
//   data = JSON.parse(data);
//   data = data.filter((c) => c.id !== req.params.id);
//   data = JSON.stringify(data);
//   writeFileSync('./Data/clients.json', data);

//   res.json({
//     message: 'OK',
//   });
// });

app.listen(port, () => {
  console.log(`S3 server on port ${port}`);
});
