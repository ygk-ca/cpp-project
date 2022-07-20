const express = require('express')
const {
    createProject,
    getProject,
    getProjects,
    deleteProject,
    updateProject,
} = require('../controllers/projectController')

const router = express.Router()

// GET all projects
router.get('/', getProjects) // Base route for /api/projects

// GET a single project
router.get('/:id', getProject)

// POST a project
router.post('/', createProject)

// DELETE a single project
router.delete('/:id', deleteProject)

// UPDATE a single project
router.patch('/:id', updateProject)


module.exports = router