'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get =  (req, res, next) => {
    Product
        .find({
            active: true
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                message: 'Error on request products!', 
                data: e
            });
        });
};

exports.getBySlug =  (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                message: 'Error on request products!', 
                data: e
            });
        });
};

exports.getById =  (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                message: 'Error on request products!', 
                data: e
            });
        });
};

exports.getByTag =  (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send({
                message: 'Error on request products!', 
                data: e
            });
        });
};


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
