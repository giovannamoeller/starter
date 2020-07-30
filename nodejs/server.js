const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Bem - vindo!');
});


app.listen(8000);
