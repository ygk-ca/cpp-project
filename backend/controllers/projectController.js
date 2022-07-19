const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({ createdAt: -1 }) // Specify 
    // const test = await Project.find({sdg: "SDG 1: No Poverty", assignment_type: 1})
    // console.log(test)
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
// const createProject = async (req, res) => {
//     // adding in a new project
//     const {sdg_desc, sdg_num, goal, orginization, source, location, published, website_url, assignment_type, sharepoint_link, statement} = req.body
    
    
//     try {
//         const project  = await Project.create({sdg_desc, sdg_num, goal, orginization, source, location, published, website_url, assignment_type, sharepoint_link, statement})
//         res.status(200).json(project)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }
const createProject = async (req, res) => {
    const {sdg, goal, orginization, source, location, published, website_url, assignment_type, theme, sharepoint_link, statement} = req.body
   
    const newProject = new Project({
        sdg: sdg,
        goal : goal,
        orginization : orginization,
        source : source,
        location : location,
        published : published,
        website_url : website_url,
        assignment_type : assignment_type,
        theme: theme,
        sharepoint_link : sharepoint_link,
        statement : statement
    });
    try {
        await newProject.save();
    } catch (error) {
        return res.status(400).json({error: error.message})

    }
   
    return res.status(201).json({project: newProject});
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

// filtering a project, calling this everytime filter is changed
const filterProject = async (req, res) => {
    // ADD THEME LATER ON
    const {sdg, assignment_type} = req.body
    
    
    const filteredProjects = await Project.find({sdg: sdg, assignment_type: assignment_type})

}


module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}
