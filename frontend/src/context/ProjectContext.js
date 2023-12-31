import { createContext, useReducer } from "react";

export const ProjectsContext = createContext()

export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                projects: action.payload
            }
        // Keeps newly created projects in sync with the database as well
        case 'CREATE_PROJECT':
            return {
                projects: [action.payload, ...state.projects]
            }
        default:
            return state
    }
}

export const ProjectsContextProvider = ({ children }) => {
    // Similar to useState,
    const [state, dispatch] = useReducer(projectsReducer, {
        projects: null
    })

    dispatch({type: 'SET_PROJECTS', payload: [{}, {}]})

    return (
        <ProjectsContext.Provider value={{...state, dispatch}}>
            { children }
        </ProjectsContext.Provider>
    )
}