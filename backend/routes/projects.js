const express = require('express')
const {
    createProject,
    getProject,
    getProjects,
    deleteProject,
    updateProject
} = require('../controllers/projectController')

const router = express.Router()

// GET all workouts
router.get('/', getProjects) // Base route for /api/projects

// GET a single workout
router.get('/:id', getProject)

// POST all workouts
router.post('/', createProject)

// DELETE a single workout
router.delete('/:id', deleteProject)

// UPDATE a single workout
router.patch('/:id', updateProject)


module.exports = router