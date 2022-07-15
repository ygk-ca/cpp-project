import { useEffect, useState } from 'react'

const HomeBody = () => {
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
        <div className="test">
            HomePage body
            <div className="projects">
                {projects && projects.map((project) => (
                    <p key={project._id}>{project.title}</p>
                ))}
            </div>
        </div>
    )
}

export default HomeBody