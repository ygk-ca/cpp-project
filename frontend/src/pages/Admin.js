import "../styles/Home.css";
import "../styles/Admin.css";
import { useEffect, useState } from 'react'
import AdminProjectDetails from "../components/AdminComponents/AdminProjectDetails";
import ProjectAdminForm from "../components/AdminComponents/ProjectAdminForm";
import AdminTitle from "../components/AdminComponents/AdminTitle";

const Admin = () => {
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
        <>
            <div >
                <AdminTitle />
            </div>
            <div className="admin-page">
                {/* Temp HomePage body */}
                <div className="form">
                    <ProjectAdminForm />
                </div>
                
                <div className="projects">
                    {projects && projects.map((project) => (
                        <AdminProjectDetails key={project._id} project={project}/>
                    ))}
                </div>
                
            </div>
        </>
        
    )
}

export default Admin

