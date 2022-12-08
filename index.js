// Server with endpoints using route parameters

const express = require('express');
const app = express();
const port = 3000;

// Set up endpoint at the root path
app.get('/', (req, res) => {
    res.send("Successful GET Request heard!")
})

// another endpoint with a path
app.get('/users', (req, res) => {
    res.send("Successful GET Request heard, from the 'users' path")
})

// Endpoint 2
app.get('/users/:id', (req, res) => {
    // extract the data from the request
    const userId = req.params.id;
    // ...send out a response back, based on the request
    res.send(`You are a FANTASTIC person, Person #${userId}`);
})

// Endpoint 3
app.get('/users/:name/:numOfCookies', (req, res) => {
    res.send(`You are great, ${req.params.name}, and you can have ${req.params.numOfCookies} cookies!`);
})

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:${port}`)
})