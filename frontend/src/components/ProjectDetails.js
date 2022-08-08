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
                    <img src="https://c4.wallpaperflare.com/wallpaper/672/357/220/road-background-color-hd-wallpaper-thumb.jpg"/>
                </div>
                <div className="card-title"><strong>{project.sdg}</strong></div>
                <div className="card-body">
                    <strong>Goal:</strong> {project.goal}
                </div>
                <div className="card-themes">
                    <strong>Themes:</strong> {project.theme.map((theme)=>{return theme + ', '})}
                </div>
                <div className="card-assignment">
                    <strong>Assignment Type:</strong> {project.assignment_type}
                </div>
                <div className="card-footer">
                    <button className="btn">Details</button>
                    {project.assignment_type === 'Mini Case Studies' &&
                        <button className="btn btn-outline">Download</button>
                    }
                    {project.assignment_type !== 'Mini Case Studies' &&
                        <button className="btn btn-outline" onClick={function(event){ navigator.clipboard.writeText(project.goal); alert('Text copied to clipboard!') }}
                            >
                            Copy to Clipboard
                        </button>
                    }
                </div>
            </div>
        </div>
        

    )
}

export default ProjectDetails