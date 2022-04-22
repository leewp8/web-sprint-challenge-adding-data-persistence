// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model')

const resourceRouter = express.Router()

resourceRouter.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
});

resourceRouter.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(next);
});

module.exports = resourceRouter;