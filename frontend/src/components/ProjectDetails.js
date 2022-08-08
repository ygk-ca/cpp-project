import "../styles/ProjectDetails.css";

const ProjectDetails = ({ project }) => {
    return (
        // <div className="details-project">
            
        //     <div className="project-image">
        //         <img className="testimg" src="" />
        //     </div>

        //     <div className="detailContainer">

        //         <h4>{project.sdg}</h4>
        //         <p><strong>Goal: </strong>{project.goal}</p>
        //         <p><strong>Orginization: </strong>{project.orginization}</p>
        //         <p><strong>Source: </strong>{project.source}</p>
        //         <p><strong>Location: </strong>{project.location}</p>
        //         <p><strong>Published: </strong>{project.published}</p>
        //         <p><strong>Website URL: </strong><a src={project.website_url}>{project.website_url}</a></p>
        //         <p><strong>Assignment Type: </strong>{project.assignment_type}</p>
        //         <p><strong>Theme(s): </strong>{project.theme.map((theme)=>{
        //             return theme + ', '})}</p>
        //         <p><strong>Download link: </strong>{project.sharepoint_link}</p>
        //         <p><strong>Statement: </strong>{project.statement}</p>
        //         <p>{project.createdAt}</p>
            
        //     </div> 
        // </div>
        <div className="card-grid">
            <div className="card">
                <div className="card-header card-image">
                    <img src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas="/>
                </div>
                <div className="card-header">{project.sdg}</div>
                <div className="card-body">
                    {project.goal}
                </div>
                <div className="card-footer">
                    <button className="btn">Details</button>
                    {project.assignment_type === 'Mini Case Studies' &&
                        <button className="btn btn-outline">Download</button>
                    }
                    {project.assignment_type !== 'Mini Case Studies' &&
                        <button className="btn btn-outline">Copy to Clipboard</button>
                    }
                </div>
            </div>
        </div>
        

    )
}

export default ProjectDetails