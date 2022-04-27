// build your `/api/projects` router here
const express = require('express');
const Project = require('./model')

const projectRouter = express.Router()

projectRouter.get('/', (req, res, next) => {
    
    Project.getProjects()
        .then(projects => {
            // console.log( projects[0].project_completed === 0 ? false : true, projects[0].project_description, projects[0].project_id, projects[0].project_name)
            // let newProjects = []
            // console.log(projects.length)
            // for ( let i = 0; i<projects.length; i++) {
            //     newProjects.push({...projects})
            // }
            res.status(200).json(projects) 
        })
        .catch(next);
});

projectRouter.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            // const [project] = project
            res.status(201).json(project);
        })
        .catch(next);
});

module.exports = projectRouter;
