// Server with endpoints using route parameters

const express = require('express');
const app = express();
const port = 3000;

// Set up endpoint at the root path
app.get('/', (req, res) => {
    res.send("Successful GET Request heard!")
})

// Endpoint 2
app.get('/users/:id', (req, res) => {
    // extract the data from the request
    const userId = req.params.id;
    // ...send out a response back, based on the request
    res.send(`You are a wonderful person, Person #${userId}`);
})

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:${port}`)
})