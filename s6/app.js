const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
// const mysql = require('mysql');
// const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


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
    console.log(`LN is on port number: ${port}`);
});