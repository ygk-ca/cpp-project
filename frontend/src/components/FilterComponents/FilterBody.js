import ProjectDetails from '../ProjectDetails'

import { useEffect, useState } from 'react'

const FilterBody = () => {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/projects') // Change localhost to server name when deploying
            const json = await response.json() // contains array of projects

            if (response.ok) {
                setProjects(json)
            }
        } 

        fetchProjects()
    }, [])

    return (
        <div className="home">
            {/* Temp HomePage body */}
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default FilterBody