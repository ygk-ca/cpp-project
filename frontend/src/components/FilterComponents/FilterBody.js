import React, { useEffect, useState } from 'react'
import ProjectDetails from '../ProjectDetails'
import Multiselect from "multiselect-react-dropdown"
import Select from 'react-select';

// Importing different arrays
import { keywordsOptions } from './CategoryArrays/KeywordsOptions'
import { SDGOptions } from './CategoryArrays/SdgOptions';
import { assingmentOptions } from './CategoryArrays/AssignmentOptions';

// Main component handling the filter body
class FilterBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Variables
            projects: null,
            assignment_type: "",
            sdg: [""],
            theme: [""],
            keywords: [""],
            
            showProjects: true,
            // Select module features
            isClearable: true,
            isSearchable: true,
        };
  
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.testSubmit = this.testSubmit.bind(this);
    }

    // Handling all 3 input submissions
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.theme)
        console.log(this.state.projects)
        console.log(this.state.keywords)

        this.setState({ showProjects: true })

        const data = {
            sdg: this.state.sdg, 
            assignment_type: this.state.assignment_type,
            theme: this.state.theme,
            keywords: this.state.keywords
        }

        fetch(`/api/projects/filter?sdg=${encodeURIComponent(data.sdg)}&assignment_type=${encodeURIComponent(data.assignment_type)}&theme=${encodeURIComponent(data.theme)}&keywords=${encodeURIComponent(data.keywords)}`, {
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
        <>
            <div className="filterHome">
                <div className="filterContainer">
                    <div className="filterTableContainer">
                        <div className="filterTableTitle">
                            Filter Table
                        </div>
                        <div className="filterInstructBlurb">
                            <div>To filter your results, please select one or more of the following categories. When you have finished making your selections, please click anywhere outside of the <em>Filter Table</em> dropdown lists and then click <em>‘Filter’</em>.</div>
                        </div>
                        
                        <div className="filterSDGDropDown">
                            <div className="themeDropdown">
                                <div className="filter-subtitle">Sustainable Development Goal:</div>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    placeholder="Select"
                                    // isClearable={this.state.isClearable}
                                    isSearchable={this.state.isSearchable}
                                    name="color"
                                    onChange={(e) => {
                                        this.setState({ sdg: e.value })
                                    }}
                                    options={SDGOptions}   
                                />

                                <br></br>

                                <div className="filter-subtitle">Assignment Type:</div>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    placeholder="Select"
                                    // isClearable={this.state.isClearable}
                                    isSearchable={this.state.isSearchable}
                                    name="color"
                                    onChange={(e) => {
                                        this.setState({ assignment_type: e.value })
                                    }}
                                    options={assingmentOptions}                 
                                />

                                <br></br>
                                
                                <div className="filter-subtitle">Keyword(s):</div>
                                <Multiselect
                                    isObject={false}
                                    onRemove={(e) => {
                                        this.setState({keywords: e});
                                    }}
                                    onSelect={(e) => {
                                        this.setState({keywords: e});
                                    }}
                                    options={keywordsOptions}
                                />
                            </div>

                        </div>
                        <div className="filterButtonContainer">
                            <button className="filterButton" onClick={this.handleSubmit}>
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
                

                {/* Lists projects */}
                <div className="projects">
                    {this.state.showProjects === true &&
                        <div className="content">
                            {this.state.projects && this.state.projects.map((project) => (
                                <ProjectDetails key={project._id} project={project}/>
                            ))}
                        </div>
                    }
                    {this.state.showProjects === false &&
                        <div className="initial-screen"> 
                            Enter filter options to get started!
                        </div>
                    }
                    
                    
                </div>
            </div>
        </>
      );
    }
  }
export default FilterBody

