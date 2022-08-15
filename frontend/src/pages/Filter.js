import "../styles/Filter.css";

import FilterTitle from "../components/FilterComponents/FilterTitle";
import FilterBody from "../components/FilterComponents/FilterBody";
import FilterInstructions from "../components/FilterComponents/FilterInstructions";

const Filter = () => {
    return (
        <div className="">
            <FilterTitle />
            <FilterInstructions />
            <div>
                <FilterBody/>
            </div>
            
        </div>
    )
}

export default Filter