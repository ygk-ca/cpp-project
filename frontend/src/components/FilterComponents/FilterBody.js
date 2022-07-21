import React, { useEffect, useState } from 'react'
import ProjectDetails from '../ProjectDetails'


class FilterBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            sdg: 'SDG 1: No Poverty',
            assignment_type: 1,
            theme: 'Demographic'
        };
  
        this.handleSDGChange = this.handleSDGChange.bind(this);
        this.handleAssignmentChange = this.handleAssignmentChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Handling all 3 input changes
    handleSDGChange(event) {
      this.setState({sdg: event.target.value});
    }

    handleAssignmentChange(event) {
        this.setState({assignment_type: event.target.value});
    }

    handleThemeChange(event) {
        this.setState({theme: event.target.value});
    }

    // Handling all 3 input submissions
    handleSubmit(event) {
        console.log(this.state.sdg)
        alert(this.state.sdg + '--- Assignment Type: ' + this.state.assignment_type + '--- Theme: ' + this.state.theme);
        event.preventDefault();

        console.log(this.state.projects)

        const data = {
            sdg: this.state.sdg, 
            assignment_type: this.state.assignment_type,
            theme: this.state.theme
        }

        fetch(`/api/projects/filter?sdg=${encodeURIComponent(data.sdg)}&assignment_type=${encodeURIComponent(data.assignment_type)}&theme=${encodeURIComponent(data.theme)}`, {
            method: "GET",
            headers: {
                    'Content-Type': 'application/json;charset=utf-8', 
                },
        })
            .then(response => response.json())
            .then(json => this.setState({projects: json}))
    }

    async componentDidMount() {
        const response = await fetch('/api/projects')
        const json = await response.json()

        if (response.ok) {
            this.setState({projects: json})
        }
        
    }

    

    render() {
      return (
        <div className="filterHome">
            <div className="filterTableContainer">
                <div className="filterTableTitle">
                    Filter Table
                </div>
                <div className="filterSDGDropDown">
                    <form onSubmit={this.handleSubmit}>
                        <label>SDG:</label>
                        <select value={this.state.sdg} onChange={this.handleSDGChange}>
                            <option value="">Select SDG</option>
                            <option value="SDG 1: No Poverty">SDG 1: No Poverty</option>
                            <option value="SDG 2: Zero Hunger">SDG 2: Zero Hunger</option>
                            <option value="SDG 3: Good Health & Well Being">SDG 3: Good Health & Well Being</option>
                        </select>

                        <label>Assignment Type:</label>
                        <select value={this.state.assignment_type} onChange={this.handleAssignmentChange}>
                            <option value="">Select Assignment Type</option>
                            <option value="1">1: Discussion Project</option>
                            <option value="2">2: PDF Case study</option>
                            <option value="3">3: Community Project</option>
                        </select>

                        <label>Theme:</label>
                        <select value={this.state.theme} onChange={this.handleThemeChange}>
                            <option value="">Select Theme</option>
                            <option value="Demographic">Demographic</option>
                            <option value="Economical">Economical</option>
                            <option value="Socio-cultural">Socio-cultural</option>
                            <option value="Technological">Technological</option>
                            <option value="Ecological">Ecological</option>
                            <option value="Poltical">Poltical</option>
                        </select>

                        <input type="submit" value="Submit" />
                        
                    </form>
                </div>
            </div>

            {/* Lists projects */}
            <div>
                <div className="projects">
                    {this.state.projects && this.state.projects.map((project) => (
                        <ProjectDetails key={project._id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
      );
    }
  }
export default FilterBody