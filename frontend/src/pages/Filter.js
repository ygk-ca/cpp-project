import "../styles/Filter.css";

import { useEffect, useState } from 'react'
import FilterBody from "../components/FilterComponents/FilterBody";
import FilterTitle from "../components/FilterComponents/FilterTitle";

const Filter = () => {
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
            <FilterTitle />
            <FilterBody/>
        </div>
    )
}

export default Filter