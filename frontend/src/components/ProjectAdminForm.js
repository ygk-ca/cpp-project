import { useState } from "react";

const ProjectAdminForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevents refresh of page from happening

        console.log('button clicked')
        const project = {sdg, goal, orginization, source, location, published, website_url, assignment_type, sharepoint_link, statement}
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
            setSharepointLink('')
            setStatement('')
            
            setError(null)
            console.log('new project added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>

            <label>SDG:</label>
            <input 
                type="text"
                onChange={(e) => setSDG(e.target.value)}
                value={sdg}
            />

            <label>Goal:</label>
            <input 
                type="text"
                onChange={(e) => setGoal(e.target.value)}
                value={goal}
            />

            <label>Orginization:</label>
            <input 
                type="text"
                onChange={(e) => setOrginization(e.target.value)}
                value={orginization}
            />

            <label>Source:</label>
            <input 
                type="text"
                onChange={(e) => setSource(e.target.value)}
                value={source}
            />

            <label>Location:</label>
            <input 
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

            <label>Published:</label>
            <input 
                type="text"
                onChange={(e) => setPublished(e.target.value)}
                value={published}
            />

            <label>Website URL:</label>
            <input 
                type="text"
                onChange={(e) => setWebsiteURL(e.target.value)}
                value={website_url}
            />

            <label>Assignment Type:</label>
            <input 
                type="text"
                onChange={(e) => setAssignmentType(e.target.value)}
                value={assignment_type}
            />

            <label>Sharepoint Link:</label>
            <input 
                type="text"
                onChange={(e) => setSharepointLink(e.target.value)}
                value={sharepoint_link}
            />

            <label>Statement:</label>
            <input 
                type="text"
                onChange={(e) => setStatement(e.target.value)}
                value={statement}
            />

            <button>Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectAdminForm