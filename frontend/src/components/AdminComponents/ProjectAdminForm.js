import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { adminSDGOptions } from "./AdminCategoryLists";
import { adminAssingmentOptions } from "./AdminCategoryLists";
import { keywordsOptions } from "../FilterComponents/CategoryArrays/KeywordsOptions";
import Multiselect from "multiselect-react-dropdown"
import Select from 'react-select';

const ProjectAdminForm = () => {
    // Adding basic info
    const [sdg, setSDG] = useState('')
    const [goal, setGoal] = useState('')
    const [orginization, setOrginization] = useState('')
    const [source, setSource] = useState('')
    const [location, setLocation] = useState('')
    const [published, setPublished] = useState('')
    const [website_url, setWebsiteURL] = useState('')
    const [assignment_type, setAssignmentType] = useState('')
    const [sharepoint_link, setSharepointLink] = useState('')
    const [statement, setStatement] = useState('')
    // const [preview_img, setPreviewImg] = useState([])

    const [error, setError] = useState(null)

    // Adding keywords
    const [keywords, setKeywords] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault() // Prevents refresh of page from happening
        console.log('button clicked')

        const project = {sdg, goal, orginization, source, location, published, website_url, assignment_type, keywords, sharepoint_link, statement}
        console.log(project)
            
        // Sending form response to backend
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json
        

        // Checking for error
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // Reset form inputs back to empty string
            setSDG('')
            setGoal('')
            setOrginization('')
            setSource('')
            setLocation('')
            setPublished('')
            setWebsiteURL('')
            setAssignmentType('')
            setKeywords([])
            setSharepointLink('')
            setStatement('')
            
            setError(null)
            alert('Project added!')
            console.log('new project added', json)
        }
    }

    return (
        <form className="create project-form" onSubmit={handleSubmit}>
            <h2 style={{"textAlign": "center"}}>Add a New Project</h2>

            <hr></hr>

            <label>Sustainable Development Goal:</label>
            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select"
                name="color"
                options={adminSDGOptions}
                onChange={(selection) => setSDG(selection.value)}
                required
            />

            <label>Description:</label>
            <input 
                type="text"
                onChange={(e) => setGoal(e.target.value)}
                value={goal}
                required
            />

            <label>OPTIONAL - Organization:</label>
            <input 
                type="text"
                onChange={(e) => setOrginization(e.target.value)}
                value={orginization}
            />

            <label>OPTIONAL - Source:</label>
            <input 
                type="text"
                onChange={(e) => setSource(e.target.value)}
                value={source}
            />

            <label>OPTIONAL - Location:</label>
            <input 
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

            <label>Published (YEAR ONLY):</label>
            <input 
                type="text"
                onChange={(e) => setPublished(e.target.value)}
                value={published}
                required
            />

            <label>OPTIONAL - Website URL:</label>
            <input 
                type="text"
                onChange={(e) => setWebsiteURL(e.target.value)}
                value={website_url}
            />

            <label>Assignment Type:</label>
            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select"
                name="color"
                options={adminAssingmentOptions}
                onChange={(selection) => setAssignmentType(selection.value)}
                required
            />

            <hr></hr>

            <label>Enter Keyword(s):</label>
            <Multiselect
                className="multiselect-admin"
                isObject={false}
                onRemove={(selection) => setKeywords(selection)}
                onSelect={(selection) => setKeywords(selection)}
                options={keywordsOptions}
                required
            />

            <hr></hr>

            <label>OPTIONAL - Statement (ONLY Assessment Ideas and Discussion Topics):</label>
            <input 
                type="text"
                onChange={(e) => setStatement(e.target.value)}
                value={statement}
            />

            <label>OPTIONAL - Qualtrics Link (ONLY Mini Case Study):</label>
            <input 
                type="text"
                onChange={(e) => setSharepointLink(e.target.value)}
                value={sharepoint_link}
            />

            {/* <label>OPTIONAL - Preview image:</label>
            <input
                type="file"
                name="preview_img"
                accept="image/*"
                onChange={(e) => setPreviewImg(e.target.value)}
            /> */}
            
            <div className="add-proj">
                <button>Add Project</button>
            </div>
            
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectAdminForm
