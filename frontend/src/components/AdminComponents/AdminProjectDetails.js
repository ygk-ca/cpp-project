import React, { useState } from 'react';
import PDF from '../s.pdf'


const AdminProjectDetails = ({ project }) => {
    // Handles deleting projects
    const handleDelete = async () => {
        const response = await fetch('/api/projects/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if (response.ok) {
            alert('Item deleted!')
        }
    }

    // Extracting SDG title name's number and storing it
    var str = project.sdg.toString()
    var sdg_num = str.match(/(\d+)/)

    return (
     <>
        <div className="card-grid">
            <div className="card">
                <div className="card-header card-image">
                    <img 
                        src={require('../../assets/SDGBanners/banner' + sdg_num[0] + '.jpg')}
                        alt="Banner to indicate different SDG's"
                    />
                </div>
                <div className="card-title"><strong>{project.sdg}</strong></div>
                <div className="card-body">
                    <strong>Description:</strong> {project.goal}
                </div>

                <div className="card-assignment">
                    <strong>Assignment Type:</strong> {project.assignment_type}
                </div>

                <div className="card-assignment">
                    <strong>Organization:</strong> {project.orginization}
                </div>

                <div className="card-assignment">
                    <strong>Published:</strong> {project.published}
                </div>

                <div className="card-assignment">
                    <strong>Website source URL:</strong> {project.website_url}
                </div>

                <div className="card-assignment">
                    <strong>Location:</strong> {project.location}
                </div>

                <div className="card-assignment">
                    <strong>Source:</strong> {project.source}
                </div>

                <div className="card-assignment">
                    <strong>Keywords:</strong> {project.keywords.map((kw)=>{
                                if (kw !== project.keywords[project.keywords.length - 1]) {
                                    return kw + ', '
                                }
                                else {
                                    return kw
                                }
                            }
                        )}

                </div>

                <div className="card-footer">
                    <button className="btn">Details</button>
                    {project.assignment_type === 'Mini Case Studies' &&
                        <>
                            <a href={project.sharepoint_link} without="true" rel="noopener noreferrer" target="_blank">
                                <button className="btn btn-outline">Download</button>
                            </a>
                            <a href={PDF} without="true" rel="noopener noreferrer" target="_blank">
                                <button className="btn">Preview</button>
                            </a>
                        </>
                    }
                    {project.assignment_type !== 'Mini Case Studies' &&
                        <button className="btn btn-outline" onClick={function(event){ navigator.clipboard.writeText(project.goal); alert('Text copied to clipboard!') }}
                            >
                            Copy to Clipboard
                        </button>
                    }
                    <button className="del-btn" onClick={handleDelete}>Delete</button>
                </div>
                
            </div>
        </div>
     </>

    )
}

export default AdminProjectDetails