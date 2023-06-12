const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bankas'
});
connection.connect();


// STAT

// SELECT column1, column2, ...
// FROM table_name;
app.get('/stat', (req, res) => {
    const sql = `
        SELECT id, amount, file
        FROM clents
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err

        const clientsNumber = result.length;
        const totalClientsFunds = result.reduce((acc, c) => c.amount + acc, 0);
        const clientsWithoutPhoto = result.filter(c => c.file === null).length;
        const clientMinus = result.filter(c => c.amount < 0).length;
        const clientWithFunds = result.filter(c => c.amount > 0).length;
        const clientsWithoutFunds = result.filter(c => c.amount === 0).length;
        const averageBalance = (totalClientsFunds / clientsNumber).toFixed(2);


        res.json({
            status: 'ok',
            clientsNumber,
            totalClientsFunds,
            clientsWithoutPhoto,
            clientMinus,
            clientWithFunds,
            clientsWithoutFunds,
            averageBalance,
        });
    });
});

//DEDUCT TAX FROM ALL CLIENTS
app.put('/clients/tax/', (req, res) => {
    const sql = `
        UPDATE clents
        SET amount = amount - ?
    `;
    connection.query(sql, [req.body.tax], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Client',
                text: 'The clients balance redused by air tax!'
            },
        });
    });
});



// GET CLIENTS

// SELECT column1, column2, ...
// FROM table_name;
app.get('/clients', (req, res) => {
    const sql = `
        SELECT id, name, lname, amount, file, status
        FROM clents
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});

// LOGIN

app.post('/login', (req, res) => {
    const sql = `
    SELECT id, username, pass, role, color
    FROM users
`;

    connection.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            const username = req.body.username;
            const pass = md5(req.body.pass);
            const user = result.find(u => u.username === username && u.pass === pass);

            if (user) {
                res.json({
                    status: 'login-ok',
                    user: { username: user.username, color: user.color, role: user.role, id: user.id },
                    message: ['Login is Ok', 'ok']
                });
            } else {
                res.json({ message: ['Invalid login', 'error'] })
            };
        }
    });
});


// LOGOUT

app.post('/logout/:id', (req, res) => {

    res.json({
        status: 'logout-ok',
        message: ['Logout is Ok', 'ok']
    });
});

// ADD SUM TO BALANCE
app.put('/clients/addfunds/:id', (req, res) => {
    const sql = `
        UPDATE clents
        SET amount = amount + ?
        WHERE id = ?
    `;
    const addSum = Number(req.body.funds).toFixed(2);
    connection.query(sql, [addSum,  req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Client',
                text: 'The client balance was replenished!'
            },
        });
    });
});

//DEDUCT SUM FROM BALANCE
app.put('/clients/subtructfunds/:id', (req, res) => {
    const sql = `
        UPDATE clents
        SET amount = amount - ?
        WHERE id = ?
    `;
    const deductSum = Number(req.body.funds).toFixed(2);
    connection.query(sql, [deductSum,  req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Client',
                text: 'The client balance was replenished!'
            },
        });
    });
});



// ADD NEW CLIENT TO TABLE CLIENTS (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/clients', (req, res) => {
    const sql = `
    INSERT INTO clents (name, lname, amount, file, status)
    VALUES (?, ?, ?, ?, ?)
    `;
    connection.query(sql, [req.body.name, req.body.lname, req.body.amount, req.body.file, req.body.status], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});

// DELETE FROM table_name WHERE condition;
app.delete('/clients/deleteaccount/:id', (req, res) => {
    const sql = `
        DELETE FROM clents
        WHERE id = ?
    `;
    connection.query(sql, [req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Trees',
                text: 'The tree was cut!'
            }
        });
    });
});

// BLOCK AN ACCOUNT
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/clients/blockaccount/:id', (req, res) => {
    const sql = `
        UPDATE clents
        SET status = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.status, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Trees',
                text: 'The client was blocked!'
            }
        });
    });
});

// EDIT AN ACCOUNT
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/clients/edit/:id', (req, res) => {
    const sql = `
        UPDATE clents
        SET name = ?, lname = ?, file = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.name, req.body.lname, req.body.file, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Client',
                text: 'The client personal info were changed!'
            },
        });
    });
});


// // TYPES

// // SELECT column1, column2, ...
// // FROM table_name;
// app.get('/types', (req, res) => {
//     const sql = `
//         SELECT t.id, t.title, p.id AS park, p.title AS parkTitle
//         FROM types AS t
//         LEFT JOIN parks AS p
//         ON t.park = p.id
//         ORDER BY p.title, t.title
//     `;
//     connection.query(sql, (err, result) => {
//         if (err) throw err
//         res.json({
//             status: 'ok',
//             result
//         });
//     });
// });



// // INSERT INTO table_name (column1, column2, column3, ...)
// // VALUES (value1, value2, value3, ...);
// app.post('/types', (req, res) => {
//     const sql = `
//     INSERT INTO types (title, park)
//     VALUES (?, ?)
//     `;
//     connection.query(sql, [req.body.title, req.body.park], (err, _) => {
//         if (err) throw err
//         res.json({
//             status: 'ok',
//             showMessage: {
//                 type: 'ok',
//                 title: 'Types',
//                 text: 'New type was created!'
//             }
//         });
//     });
// });

// // DELETE FROM table_name WHERE condition;
// app.delete('/types/:id', (req, res) => {
//     const sql = `
//         DELETE FROM types
//         WHERE id = ?
//     `;
//     connection.query(sql, [req.params.id], (err, _) => {
//         if (err) throw err
//         res.json({
//             status: 'ok',
//             showMessage: {
//                 type: 'info',
//                 title: 'Types',
//                 text: 'The type was deleted!'
//             }
//         });
//     });
// });

// // UPDATE table_name
// // SET column1 = value1, column2 = value2, ...
// // WHERE condition;
// app.put('/types/:id', (req, res) => {
//     const sql = `
//         UPDATE types
//         SET title = ?, park = ?
//         WHERE id = ?
//     `;
//     connection.query(sql, [req.body.title, req.body.park, req.params.id], (err, _) => {
//         if (err) throw err
//         res.json({
//             status: 'ok',
//             showMessage: {
//                 type: 'info',
//                 title: 'Types',
//                 text: 'The type was updated!'
//             }
//         });
//     });
// });


// SELECT COUNT(CustomerID), Country
// FROM Customers
// GROUP BY Country;

// TYPES COUNT
app.get('/types-count', (req, res) => {
    const sql = `
        SELECT COUNT(type) AS count, type
        FROM trees
        GROUP BY type
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });

});
// PARKS

// SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;

app.get('/parks', (req, res) => {
    const sql = `
        SELECT parks.id, parks.title, types.title AS typeTitle
        FROM parks
        LEFT JOIN types
        ON types.park = parks.id
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});

app.post('/parks', (req, res) => {
    const sql = `
    INSERT INTO parks (title)
    VALUES (?)
    `;
    connection.query(sql, [req.body.title], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'ok',
                title: 'Parks',
                text: 'New park was created!'
            }
        });
    });
});

app.delete('/parks/:id', (req, res) => {
    const sql = `
        DELETE FROM parks
        WHERE id = ?
    `;
    connection.query(sql, [req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Parks',
                text: 'The Park was deleted!'
            }
        });
    });
});

app.put('/parks/:id', (req, res) => {
    const sql = `
        UPDATE parks
        SET title = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.title, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Parks',
                text: 'The park was updated!'
            }
        });
    });
});



app.listen(port, () => {
    console.log(`BANKAS 4 is on port number: ${port}`);
});