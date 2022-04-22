// build your `/api/projects` router here
const express = require('express');
const Project = require('./model')

const projectRouter = express.Router()

projectRouter.get('/', (req, res, next) => {
    
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
});

projectRouter.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(next);
});

module.exports = projectRouter;
