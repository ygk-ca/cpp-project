import "../styles/Home.css";
import { useEffect, useState } from 'react'
import TitleBackground from "../components/HomeComponents/TitleBackground";
import HomeBody from "../components/HomeComponents/HomeBody";

// components
import ProjectDetails from '../components/ProjectDetails'
import ProjectAdminForm from '../components/ProjectAdminForm'

const Home = () => {
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
        <div className="">
            <TitleBackground/>
            <HomeBody/>
        </div>
    )
}

export default Home