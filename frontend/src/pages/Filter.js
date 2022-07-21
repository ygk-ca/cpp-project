import "../styles/Filter.css";

import { useEffect, useState } from 'react'
import FilterTitle from "../components/FilterComponents/FilterTitle";
import FilterBody from "../components/FilterComponents/FilterBody";

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