import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SDGOptions } from "../FilterComponents/CategoryArrays/SdgOptions";
import { assingmentOptions } from "../FilterComponents/CategoryArrays/AssignmentOptions";
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
    const [error, setError] = useState(null)

    // Adding keywords
    const [keywords, setKeywords] = useState([]);
    const [kw1, setKW1] = useState('');
    const [kw2, setKW2] = useState('');
    const [kw3, setKW3] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault() // Prevents refresh of page from happening
        console.log('button clicked')

        const project = {sdg, goal, orginization, source, location, published, website_url, assignment_type, keywords: [kw1, kw2, kw3], sharepoint_link, statement}
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
            setKW1('')
            setKW2('')
            setKW3('')
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
                options={SDGOptions}
                onChange={(selection) => setSDG(selection.value)}
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
                options={assingmentOptions}
                onChange={(selection) => setAssignmentType(selection.value)}
            />

            <hr></hr>

            <label>Enter Keyword 1:</label>
            <input 
                type="text"
                onChange={(e) => setKW1(e.target.value)}
                value={kw1}
                required
            />

            <label>Enter Keyword 2:</label>
            <input 
                type="text"
                onChange={(e) => setKW2(e.target.value)}
                value={kw2}
            />

            <label>Enter Keyword 3:</label>
            <input 
                type="text"
                onChange={(e) => setKW3(e.target.value)}
                value={kw3}
            />

            <hr></hr>

            <label>OPTIONAL - Statement (Tier 1 & 2):</label>
            <input 
                type="text"
                onChange={(e) => setStatement(e.target.value)}
                value={statement}
            />

            <label>OPTIONAL - Qualtrics Link (Tier 3):</label>
            <input 
                type="text"
                onChange={(e) => setSharepointLink(e.target.value)}
                value={sharepoint_link}
            />
            
            <div className="add-proj">
                <button>Add Project</button>
            </div>
            
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectAdminForm
