const express = require('express');
const app = express();
const port = 3000; 
const budget = require('./server_s3.json');

app.use('/', express.static('public'));

app.get('/hello', (reg, res)=> {
    res.send('Hello World!');
});

app.get('/budget', (reg, res)=> {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});