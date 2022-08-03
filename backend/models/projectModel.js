const mongoose = require('mongoose') 

const Schema = mongoose.Schema

// Project schematic
const projectSchema = new Schema({
    // general schema templates

    // sdg
    sdg: [{
        type: String,
        required: true
    }],
    // goal of the project
    goal: {
        type: String,
        required: true
    },
    orginization: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // year published
    published: { 
        type: Number,
    },
    website_url: {
        type: String,
    },
    assignment_type: {
        type: String,
        required: true
    },
    // array of themes
    theme: [{
        type: String,
        required: true
    }],

    // assignment specific schema templates

    // ONLY APPLIES TO TIER 2 ASSIGNMENTS, NOT REQUIRED
    sharepoint_link: {
        type: String
    },
    // ONLY APPLIES TO TIER 1 ASSIGNMENTS, NOT REQUIRED
    statement: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)


