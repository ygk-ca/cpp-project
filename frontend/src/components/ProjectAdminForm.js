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
    const [theme, setTheme] = useState('')
    const [sharepoint_link, setSharepointLink] = useState('')
    const [statement, setStatement] = useState('')
    const [error, setError] = useState(null)


    // testing out theme array
    const [themes, setThemes] = useState({});
    const available_themes = ['magic', 'joy', 'fun', 'more'];

    const addTheme = (name) =>{
        if(typeof themes[name] == 'undefined') {
          let temp_themes = {...themes};
          temp_themes[name] = name;
          setThemes(temp_themes);
        }
 
   }
 
   const removeTheme = (name) =>{
     if(typeof themes[name] !== 'undefined') {
       let temp_themes = {...themes};
       delete temp_themes[name];
       setThemes(temp_themes);
     }
 
   }
 
   const themeselector = available_themes.map((name)=>{
         let checked = false;
         if(typeof themes[name] !== 'undefined'){
            checked = true;
         }
 
         return <div><input type="checkbox" {...(checked ? {checked: 'checked'}: {})}  value={name} onClick={(ev)=>{ if(ev.target.checked) {  addTheme(name)  } else { removeTheme(name)} } } /> {name}</div>;
   });



    const handleSubmit = async (e) => {
        e.preventDefault() // Prevents refresh of page from happening
        console.log('button clicked')
        const project = {sdg, goal, orginization, source, location, published, website_url, assignment_type, theme, sharepoint_link, statement}
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
            setTheme('')
            setSharepointLink('')
            setStatement('')
            
            setError(null)
            console.log('new project added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>

            <label>SDG (Num + Name):</label>
            <input 
                type="text"
                placeholder="e.g. SDG 2: Zero Hunger"
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

            <label>Theme:</label>
            <input 
                type="text"
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
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

            {themeselector}

            <button>Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectAdminForm