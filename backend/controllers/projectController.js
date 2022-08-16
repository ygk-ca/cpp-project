const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find().sort({ assignment_type: 1 }) 
    console.log(projects)
    res.status(200).json(projects)
}

// get filtered projects
const getFilteredProjects = async (req, res) => {
    // Initializing request object that will be sent to retrieve DB information
    var request = {}

    // --------- Theme functions ---------

    // Function to separate commas from string - Complexity: O(n + n)
    function separateCommas(str) {
        // O(n) algorithm to find indices of location of commas
        let commaLocations = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ',') {
                console.log(i)
                commaLocations.push(i)
            }
        }
        
        // O(n) algorithm to separate commas from strings and extract words
        let themes = []
        var l = 0 // Left pointer

        for (let i = 0; i <= commaLocations.length; i++) {
            var tempTheme = str.slice(l, commaLocations[i])
            l = commaLocations[i]+1
            themes.push(tempTheme)
        }

        // Add the themes to the search query
        addThemeToRequest(themes.sort())
    }

    // Function to add theme to request object
    function addThemeToRequest(themes) {
        if (themes.length) {
            request['theme'] = { $all: themes }
        }
    }


    // ------ Checking for whether categories are specified by user ------

    // See if sdg selected
    if (req.query.sdg !== '') {
        request["sdg"] = req.query.sdg
    }
    // See if assignment type selected
    if (req.query.assignment_type !== '') {
        request["assignment_type"] = req.query.assignment_type
    }
    // See if theme selected
    if (req.query.theme !== '') {
        // If there are more than one themes 
        if (req.query.theme.length > 14) {
            separateCommas(req.query.theme)
        }
        // If there is just one theme
        else {
            addThemeToRequest(req.query.theme)
        }
    }

    console.log(request)

    const projects = await Project.find(request).sort({ assignment_type: 1 })
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
// const filterProject = async (req, res) => {
//     const {sdg, assignment_type, theme} = req.body
    
//     const filteredProjects = await Project.find({sdg: sdg, assignment_type: assignment_type, theme: theme})

//     res.status(200).json(filteredProjects)
// }


module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
    getFilteredProjects
}
