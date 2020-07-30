const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.create({ 
            title: 'iPhone',
            description: 'iPhone 11 128 gb',
            url: 'http://apple.com'
        });
        return res.json(products);
    }
}

