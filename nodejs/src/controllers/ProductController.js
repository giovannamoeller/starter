const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        // Criação
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // une funcionalidade do show com o update
        // new = true => mongoose retorna o produto como atualizado
        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send('Sucesso');
    }
}

