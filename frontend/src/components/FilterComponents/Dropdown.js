import React, { useEffect, useRef, useState } from "https://cdn.skypack.dev/react@17.0.1";

// const handleClick = (selected) => {

// }

const Dropdown = () => {
    
    

    return (
        <div className="select">
            <select>
                <option value="1">SDG 1: No Poverty</option>
                <option value="2">SDG 2: Zero Hunger</option>
                <option value="3">SDG 3: Good Health & Well-Being</option>
            </select>
            
        </div>
    );
};

export default Dropdown

// import React, { useEffect, useRef, useState } from "https://cdn.skypack.dev/react@17.0.1";

// // const handleClick = (selected) => {

// // }

// class Dropdown extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'No Poverty'}
//     }
// }