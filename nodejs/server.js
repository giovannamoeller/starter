const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Conectando database
mongoose.connect('mongodb://localhost:27017/nodeAPI', { useNewUrlParser: true, useUnifiedTopology: true }); //nodeAPI é o nome da database

requireDir('./src/models/');
// Criando primeiro model

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({ 
        title: 'iPhone',
        description: 'iPhone 11 128 gb',
        url: 'http://apple.com'
    })
    return res.send('Bem - vindo!');
});


app.listen(8000);
