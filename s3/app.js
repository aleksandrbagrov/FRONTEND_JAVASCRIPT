import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
const app = express(); // initiate express
const PORT = 3003;

app.use(cors());

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send(`<h1>${req.query.hello} ${req.query.who}!</h1>`);
// })

// app.get('/animal/:a', (req, res) => {
//   // res.send(`<h1>Hello, ${req.params.a}!</h1>`);
//   res.json({ text: req.params.a})
// })

app.get('/clients', (req, res) => {
  const data = fs.readFileSync('./Data/clients.json', 'utf-8');
  res.json({ 
    clients: JSON.parse(data), 
    message: 'OK' 
  });
});

app.post('/clients', (req, res) => {
  let data = fs.readFileSync('./Data/clients.json', 'utf-8');

  const id = uuidv4();
  const client = {...req.body.client, id};

  data = JSON.parse(data);
  data.push(client);
  data = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', data);

  res.json({  
    message: ['New client was created', 'ok'] 
  });
});


app.listen(PORT, () => console.log('Server S3 is running on http://localhost:' + PORT));
