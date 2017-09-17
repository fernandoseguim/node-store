'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(p => {
            res.status(201).send({message: 'Product created successful!'});
        })
        .catch(e => {
            res.status(400).send({
                message: 'Error to create the product!', 
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body 
    });
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};
