// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model')

const taskRouter = express.Router()

taskRouter.get('/', (req, res, next) => {
    
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

taskRouter.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(next);
});

module.exports = taskRouter;