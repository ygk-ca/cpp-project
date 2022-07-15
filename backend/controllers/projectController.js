const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({ createdAt: -1 }) // Specify 

    res.status(200).json(projects)
}

// get a single project
const getProject = async (req, res) => {
    // obtaining id through http request
    const { id } = req.params

    // checking if id is mongoDB type, avoiding internal error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project'})
    }

    const project  = await Project.findById(id)

    if (!project) {
        return res.status(404).json({error: 'No such project'})
    }
    res.status(200).json(project)
}

// create new project
const createProject = async (req, res) => {
    // adding in a new project
    const {title, reps, load} = req.body
    try {
        const project  = await Project.create({title, load, reps})
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params

    // checking if id is mongoDB type, avoiding internal error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project'})
    }

    const project = await Project.findOneAndDelete({_id: id})

    // if we don't have the project
    if (!project) {
        return res.status(404).json({error: 'No such project'})
    }

    res.status(200).json(project)
}

// update a project
const updateProject = async (req, res) => {
    const { id } = req.params

    // checking if id is mongoDB type, avoiding internal error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project'})
    }

    const project = await Project.findOneAndUpdate({_id: id}, {
        ...req.body // whatever properties are on the body, it updates those specific ones
    })

    // if we don't have the project
    if (!project) {
        return res.status(404).json({error: 'No such project'})
    }

    res.status(200).json(project)
}


module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}