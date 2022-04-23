// build your `Project` model here
const db = require('../../data/dbConfig');

const projectBool = (bob) => {
    return bob.map(p => ({...p, project_completed: p.project_completed === 0 ? false : true}))
    
}
function getProjects() {
    return db('projects')
    // .then(projects => projects.map(p => ({...p, project_completed: p.project_completed === 0 ? false : true})))
    .then((projects) => {
        return projectBool(projects)
    })
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project)
    const [aProject] = await db('projects').where({ project_id })
    return projectBool(aProject)
  }


module.exports = {
    getProjects,
    createProject
}