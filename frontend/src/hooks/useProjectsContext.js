import { ProjectsContext } from "../context/ProjectContext";
import { useContext } from 'react'

export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)

    // If we don't have a value for the context
    if (!context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}