import ProjectDetails from '../ProjectDetails'
import Dropdown from './Dropdown'
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
        <div className="filterHome">
            <div className="filterTableContainer">
                <div className="filterTableTitle">
                    Filter Table
                </div>
                <div className="filterSDGDropDown">
                    <Dropdown />
                </div>
            </div>

            {/* Lists projects */}
            <div>
                <div className="projects">
                    {projects && projects.map((project) => (
                        <ProjectDetails key={project._id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterBody