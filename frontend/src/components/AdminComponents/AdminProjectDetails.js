import React, { useState } from 'react';
import PDF from '../s.pdf'


const AdminProjectDetails = ({ project }) => {
    return (
     <>
        <div className="card-grid">
            <div className="card">
                <div className="card-header card-image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/672/357/220/road-background-color-hd-wallpaper-thumb.jpg" alt="temp banner"/>
                </div>
                <div className="card-title"><strong>{project.sdg}</strong></div>
                <div className="card-body">
                    <strong>Goal:</strong> {project.goal}
                </div>
                <div className="card-themes">
                    <strong>Theme(s):</strong> {project.theme.map((theme)=>{
                                if (theme !== project.theme[project.theme.length - 1]) {
                                    return theme + ', '
                                }
                                else {
                                    return theme
                                }
                            }
                        )}
                </div>
                <div className="card-assignment">
                    <strong>Assignment Type:</strong> {project.assignment_type}
                </div>
                <div className="card-footer">
                    <button className="btn">Details</button>
                    {project.assignment_type === 'Mini Case Studies' &&
                        <>
                            <button className="btn btn-outline">Download</button>
                            <a href={PDF} without rel="noopener noreferrer" target="_blank">
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
                </div>
            </div>
        </div>
     </>

    )
}

export default AdminProjectDetails