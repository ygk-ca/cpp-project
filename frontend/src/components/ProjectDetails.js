const ProjectDetails = ({ project }) => {
    return (
        <div className="project-details">
            <h4>{project.sdg}</h4>
            <p><strong>Goal: </strong>{project.goal}</p>
            <p><strong>Orginization: </strong>{project.orginization}</p>
            <p><strong>Source: </strong>{project.source}</p>
            <p><strong>Location: </strong>{project.location}</p>
            <p><strong>Published: </strong>{project.published}</p>
            <p><strong>Website URL: </strong>{project.website_url}</p>
            <p><strong>Assignment Type: </strong>{project.assignment_type}</p>
            <p><strong>Themes: </strong>{project.theme}</p>
            <p><strong>Sharepoint link: </strong>{project.sharepoint_link}</p>
            <p><strong>Statement: </strong>{project.statement}</p>
            <p>{project.createdAt}</p>
        </div>
    )
}

export default ProjectDetails