const express = require('express')
const app = express()
const logic = require('../controller/handle')

app.get('/test', (req, res) => {
    res.send('test')
});

app.post('/register', async (req, res) => {
    var result = await new logic().cratePolitic(req.body);
    res.status(result[0]).json(result[1]);
})

module.exports = app;