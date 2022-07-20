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
import React from 'react'

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sdg: 'SDG 1: No Poverty',
        assignment_type: 1
    };
  
      this.handleSDGChange = this.handleSDGChange.bind(this);
      this.handleAssignmentChange = this.handleAssignmentChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Handling all 3 input changes
    handleSDGChange(event) {
      this.setState({sdg: event.target.value});
    }

    handleAssignmentChange(event) {
        this.setState({assignment_type: event.target.value});
    }

    // Handling all 3 input submissions
    handleSubmit(event) {
        console.log(this.state.sdg)
      alert(this.state.sdg + '--- Assignment Type: ' + this.state.assignment_type);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>SDG:</label>
            <select value={this.state.sdg} onChange={this.handleSDGChange}>
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

            <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Dropdown