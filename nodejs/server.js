const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeAPI', { useNewUrlParser: true, useUnifiedTopology: true }); //nodeAPI é o nome da database

app.get('/', (req, res) => {
    return res.send('Bem - vindo!');
});


app.listen(8000);
