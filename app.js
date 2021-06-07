// App.js
// Database
const db = require('./database/db-connector');

/*
    SETUP
*/
const express = require('express');   // We are using the express library for the web server
const app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 9022;                 // Set a port number at the top so it's easy to change in the future
let hostname = process.env.HOSTNAME || "localhost";
/*
    ROUTES
*/
// app.get('/', function(req, res)                 // This is the basic syntax for what is called a 'route'
//     {
//         res.send("The server is running!")      // This function literally sends the string "The server is running!" to the computer
//     });                                         // requesting the web site.
/*
    Enabling CORS
*/
const cors = require('cors');
app.use(cors());

// Parsing the body
app.use(express.json());

// app.get('/', function(req, res)
//     {
//         // Define our queries
//         query1 = 'DROP TABLE IF EXISTS diagnostic;';
//         query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
//         query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
//         query4 = 'SELECT * FROM diagnostic;';

//         // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

//         // DROP TABLE...
//         db.pool.query(query1, function (err, results, fields){

//             // CREATE TABLE...
//             db.pool.query(query2, function(err, results, fields){

//                 // INSERT INTO...
//                 db.pool.query(query3, function(err, results, fields){

//                     // SELECT *...
//                     db.pool.query(query4, function(err, results, fields){

//                         // Send the results to the browser
//                         res.send(JSON.stringify(results));
//                     });
//                 });
//             });
//         });
//     });

// Supposed to empty the tables but does not work :(
app.get('/reset', function (req, res) {
    // Define our queries
    let query1 = 'SET FOREIGN_KEY_CHECKS = 0;';
    let query2 = 'TRUNCATE TABLE Orders;';
    let query3 = 'TRUNCATE TABLE Customers;';
    let query4 = 'TRUNCATE TABLE Items;';
    let query5 = 'TRUNCATE TABLE Cashiers;';
    let query6 = 'TRUNCATE TABLE Cooks;';
    let query7 = 'SET FOREIGN_KEY_CHECKS = 1;';

    // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

    // DROP TABLE...
    db.pool.query(query1, function (err, results, fields) {

        // CREATE TABLE...
        db.pool.query(query2, function (err, results, fields) {

            // INSERT INTO...
            db.pool.query(query3, function (err, results, fields) {

                // SELECT *...
                db.pool.query(query4, function (err, results, fields) {

                    db.pool.query(query5, function (err, results, fields) {

                        // INSERT INTO...
                        db.pool.query(query6, function (err, results, fields) {

                            // SELECT *...
                            db.pool.query(query7, function (err, results, fields) {

                                // Send the results to the browser
                                res.send(JSON.stringify(results));
                            });
                        });
                    });
                });
            });
        });
    });
});

// Selects Entire Table (to populate table at start)
app.get("/select/:table", (req, res) => {
    const table_caps = req.params.table.charAt(0).toUpperCase() + req.params.table.slice(1);

    let sql = `SELECT * FROM ${table_caps}`;

    let query = db.pool.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// Selects Table Row by ID
app.get("/select/:table/:id", (req, res) => {
    const table_caps = req.params.table.charAt(0).toUpperCase() + req.params.table.slice(1);
    const table_sing = req.params.table.slice(0, -1);

    let sql = `SELECT * FROM ${table_caps} WHERE ${table_sing}ID = ${req.params.id}`;

    let query = db.pool.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// Deletes Table Row by ID
app.get("/delete/:table/:id", (req, res) => {
    const table_caps = req.params.table.charAt(0).toUpperCase() + req.params.table.slice(1);
    const table_sing = req.params.table.slice(0, -1);

    let sql = `DELETE FROM ${table_caps} WHERE ${table_sing}ID = ${req.params.id}`;

    let query = db.pool.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// Updates Orders Table
app.put("/orders", (req, res) => {
    let sql = "UPDATE Orders SET customerID=?, cookID=?, cashierID=?, itemID=?, date=?, orderLocation=?, orderType=?, totalPrice=? WHERE orderID=?";
    let updated_att = [req.body.customerID,
        req.body.cookID,
        req.body.cashierID,
        req.body.itemID,
        req.body.date,
        req.body.orderLocation,
        req.body.orderType,
        req.body.totalPrice,
        req.body.orderID];

    let query = db.pool.query(sql, updated_att, (err, results) => {
        let context = {};
        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Updates Customers Table
app.put("/customers", (req, res) => {
    let sql = "UPDATE Customers SET firstName=?, lastName=?, email=?, username=? WHERE customerID=?";
    let updated_att = [req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.username,
        req.body.customerID];

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, updated_att, (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Updates Cashiers Table
app.put("/cashiers", (req, res) => {
    let sql = "UPDATE Cashiers SET firstName=?, lastName=?, email=?, username=? WHERE cashierID=?";
    let updated_att = [req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.username,
    req.body.cashierID];

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, updated_att, (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Updates Cooks Table
app.put("/cooks", (req, res) => {
    let sql = "UPDATE Cooks SET firstName=?, lastName=?, email=?, username=? WHERE cookID=?";
    let updated_att = [req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.username,
    req.body.cookID];

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, updated_att, (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Updates Cashiers Table
// app.put("/cooks", (req, res) => {
//     let sql = "UPDATE Cooks SET firstName=?, lastName=?, email=?, username=? WHERE customerID=?";
//     let updated_att = [req.body.firstName,
//     req.body.lastName,
//     req.body.email,
//     req.body.username,
//     req.body.customerID];

//     // console.log(req.body);
//     // res.send(req.body);

//     let query = db.pool.query(sql, updated_att, (err, results) => {
//         let context = {};

//         if (err) throw err;

//         console.log(results);
//         context.results = true;
//         res.send(context);
//     });
// });

// Updates Items Table
app.put("/items", (req, res) => {
    let sql = "UPDATE Items SET name=?, quantity=?, unitPrice=?, itemCategory=? WHERE itemID=?";
    let updated_att = [req.body.name,
        req.body.quantity,
        req.body.unitPrice,
        req.body.itemCategory,
        req.body.itemID];

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, updated_att, (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Inserts Orders Table (CREATE)
app.post("/orders", (req, res) => {
    let sql = "INSERT INTO Orders (customerID, cookID, cashierID, itemID, date, orderLocation, orderType, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    let { customerID, cookID, cashierID, itemID, date, orderLocation, orderType, totalPrice } = req.body;

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, [customerID, cookID, cashierID, itemID, date, orderLocation, orderType, totalPrice], (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Inserts Customers Table (CREATE)
app.post("/customers", (req, res) => {
    let sql = "INSERT INTO Customers (firstName, lastName, email, username) VALUES (?, ?, ?, ?)";
    let { firstName, lastName, email, username } = req.body;

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, [firstName, lastName, email, username], (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Inserts Cashiers Table (CREATE)
app.post("/cashiers", (req, res) => {
    let sql = "INSERT INTO Cashiers (firstName, lastName, email, username) VALUES (?, ?, ?, ?)";
    let { firstName, lastName, email, username } = req.body;

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, [firstName, lastName, email, username], (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Inserts Cooks Table (CREATE)
app.post("/cooks", (req, res) => {
    let sql = "INSERT INTO Cooks (firstName, lastName, email, username) VALUES (?, ?, ?, ?)";
    let { firstName, lastName, email, username } = req.body;

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, [firstName, lastName, email, username], (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

// Inserts Items Table (READS)
app.post("/items", (req, res) => {
    let sql = "INSERT INTO Items (name, quantity, unitPrice, itemCategory) VALUES (?, ?, ?, ?)";
    let { name, quantity, unitPrice, itemCategory } = req.body;

    // console.log(req.body);
    // res.send(req.body);

    let query = db.pool.query(sql, [name, quantity, unitPrice, itemCategory], (err, results) => {
        let context = {};

        if (err) throw err;

        console.log(results);
        context.results = true;
        res.send(context);
    });
});

    
/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on ' + hostname +':' + PORT + '; press Ctrl-C to terminate.')
});