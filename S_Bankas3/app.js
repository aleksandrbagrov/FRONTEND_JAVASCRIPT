import express, { json, urlencoded } from 'express';
import cors from 'cors';
import fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';

const app = express();

const port = 3003;

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/clients', (req, res) => {
  const data = fs.readFileSync('./Data/clients.json', 'utf8');
  const clientsData = JSON.parse(data);
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
  const dataString = fs.readFileSync('./Data/clients.json', 'utf8');
  const id = uuidv4();
  req.body.id = id;
  req.body.balance = +req.body.balance;
  const client = req.body;
  const data = dataString ? JSON.parse(dataString) : [];
  data.push(client);

  data?.sort((a, b) => {
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

  const newDataString = JSON.stringify(data);
  fs.writeFileSync('./Data/clients.json', newDataString);

  res.json(data);
});

app.put('/clients/addfunds/:id', (req, res) => {
  let data = fs.readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);

  data = data.map(client =>
    client.id === req.params.id ? { ...client, balance: Number((client.balance + Number(req.body.funds)).toFixed(2)) } : { ...client }
  );

  const writtenData = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});

app.put('/clients/subtructfunds/:id', (req, res) => {
  let data = fs.readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);

  data = data.map(client =>
    client.id === req.params.id ? { ...client, balance: Number((client.balance - Number(req.body.funds)).toFixed(2)) } : { ...client }
  );

  const writtenData = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});

app.delete('/clients/deleteaccount/:id', (req, res) => {
  let data = fs.readFileSync('./Data/clients.json', 'utf8');
  data = JSON.parse(data);
  data = data.filter(client => client.id !== req.params.id);

  const writtenData = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', writtenData);
  res.json(data);
});

// LOGIN

app.post('/login', (req, res) => {
  let data = fs.readFileSync('./Data/users.json', 'utf8');
  data = JSON.parse(data);
  // const id = uuidv4();

  const email = req.body.email;
  const pass = md5(req.body.pass);

  const user = data.find(u => u.email === email && u.pass === pass);

  if(user) {
      res.json({
          status: 'login-ok',
          user: {email: user.email, color: user.color, role: user.role, id: user.id},
          message: ['Login is Ok', 'ok'] 
      });
  }  else {
      res.json({ message: ['Invalid login', 'error'] })
  };
});

// LOGOUT

app.post('/logout/:id', (req, res) => {

  res.json({
      status: 'logout-ok',
      message: ['Logout is Ok', 'ok'] 
  });
});



app.listen(port, () => {
  console.log(`S3 server on port ${port}`);
});
