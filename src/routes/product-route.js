'use strict';

const express = require('express');
const router = express.Router();

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const update = router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body 
    });
});

const remove = router.delete('/:id', (req, res, next) => {
    res.status(201).send(req.body);
});

module.exports = router;