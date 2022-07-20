// import React, { useEffect, useRef, useState } from "https://cdn.skypack.dev/react@17.0.1";

// // const handleClick = (selected) => {

// // }

// const Dropdown = () => {
    
    

//     return (
//         <div className="select">
//             <select>
//                 <option value="1">SDG 1: No Poverty</option>
//                 <option value="2">SDG 2: Zero Hunger</option>
//                 <option value="3">SDG 3: Good Health & Well-Being</option>
//             </select>
            
//         </div>
//     );
// };

// export default Dropdown
import React, { useEffect, useState } from 'react'

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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

    // componentDidUpdate() {
    //     const fetchProjects = async () => {
    //         const response = await fetch('/api/projects' + URLSearchParams({ sdg: this.state.sdg})) // Change localhost to server name when deploying
    //         const json = await response.json() // contains array of projects

    //         if (response.ok) {
    //             console.log(json)
    //         }
    //         else {
    //             console.log(json.error)
    //         }
    //     } 

    //     fetchProjects()
    // }

    // Handling all 3 input submissions
    handleSubmit(event) {
        console.log(this.state.sdg)
        alert(this.state.sdg + '--- Assignment Type: ' + this.state.assignment_type + '--- Theme: ' + this.state.theme);
        event.preventDefault();
        
        // this.componentDidUpdate()
    }

    
    

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>SDG:</label>
            <select value={this.state.sdg} onChange={this.handleSDGChange}>
                {/* <option>Select SDG</option> */}
              <option value="SDG 1: No Poverty">SDG 1: No Poverty</option>
              <option value="SDG 2: Zero Hunger">SDG 2: Zero Hunger</option>
              <option value="SDG 3: Good Health & Well Being">SDG 3: Good Health & Well Being</option>
            </select>

            <label>Assignment Type:</label>
            <select value={this.state.assignment_type} onChange={this.handleAssignmentChange}>
              <option value="1">1: Discussion Project</option>
              <option value="2">2: PDF Case study</option>
              <option value="3">3: Community Project</option>
            </select>

            <label>Theme:</label>
            <select value={this.state.theme} onChange={this.handleThemeChange}>
              <option value="Demographic">Demographic</option>
              <option value="Economical">Economical</option>
              <option value="Socio-cultural">Socio-cultural</option>
              <option value="Technological">Technological</option>
              <option value="Ecological">Ecological</option>
              <option value="Poltical">Poltical</option>
            </select>

            <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Dropdown