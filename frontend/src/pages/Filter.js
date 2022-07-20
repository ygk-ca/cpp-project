import "../styles/Filter.css";

import { useEffect, useState } from 'react'
import FilterBody from "../components/FilterComponents/FilterBody";
import FilterTitle from "../components/FilterComponents/FilterTitle";

const Filter = () => {
    return (
        <div className="">
            <FilterTitle />
            <div>
                <FilterBody/>
            </div>
            
        </div>
    )
}

export default Filter