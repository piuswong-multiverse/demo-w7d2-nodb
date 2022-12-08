// Server with endpoints using route parameters

const express = require('express');
const app = express();
const port = 3000;

// Set up endpoint at the root path
app.get('/', (req, res) => {
    res.send("Successful GET Request heard!")
})

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:${port}`)
})